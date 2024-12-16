"use strict";
// const FeatherIcons = ["add", "minus"] as const;
// type FeatherIcon = (typeof FeatherIcons)[number];
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const IoniconIcons = ["create", "remove"] as const;
// type IoniconIcon = (typeof IoniconIcons)[number];
// // const FontFamilyIconMap = {
// //   feather: FeatherIcons,
// //   ionicon: IoniconIcons,
// // } as const;
// type FontFamilyIconMap = {
//   feather: FeatherIcon;
//   ionicon: IoniconIcon;
// };
// type FontFamily = keyof FontFamilyIconMap;
// interface Params<T extends FontFamily> {
//   type: T;
//   iconName: FontFamilyIconMap[T];
// }
// const test = <T extends FontFamily>(params: Params<T>) => {};
// test({ type: "feather", iconName: "add" });
const fs_1 = __importDefault(require("fs"));
const IconSets = [
    "AntDesign",
    "Entypo",
    "EvilIcons",
    "Feather",
    "FontAwesome",
    "FontAwesome5",
    "FontAwesome5Pro",
    "FontAwesome6",
    "Fontisto",
    "Foundation",
    "Ionicons",
    "MaterialCommunityIcons",
    "MaterialIcons",
    "Octicons",
    "SimpleLineIcons",
    "Zocial",
];
const getIconGlyphMapFilePath = (iconSetName) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const iconSetFilePath = `./node_modules/react-native-vector-icons/${iconSetName}.js`;
    let rawdata = fs_1.default.readFileSync(iconSetFilePath);
    let fileContent = rawdata.toString();
    const lines = fileContent.split("\n");
    const importGlyphMapLine = lines.find((line) => line.includes("import glyphMap"));
    const relativeGlyphMapFilePath = (_b = (_a = importGlyphMapLine === null || importGlyphMapLine === void 0 ? void 0 : importGlyphMapLine.split("./")) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.replace(";", "").replace("'", "");
    const glyphMapFilePath = `./node_modules/react-native-vector-icons/${relativeGlyphMapFilePath}`;
    return glyphMapFilePath;
});
const generateTypesForIconSet = (iconSetName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Generate types for icon set " + iconSetName);
    const glyphMapFilePath = yield getIconGlyphMapFilePath(iconSetName);
    if (!glyphMapFilePath) {
        console.warn("Cannot find glyph map file path for", iconSetName);
        return;
    }
    let rawdata = fs_1.default.readFileSync(glyphMapFilePath);
    let data = JSON.parse(rawdata.toString());
    let iconNames = Object.keys(data);
    let iconsCount = iconNames.length;
    console.log(`Found ${iconsCount} icons.`);
    console.log("Icon names:", iconNames);
    const iconListName = `${iconSetName}Icons`;
    const iconListDeclaration = `const ${iconListName} = ${JSON.stringify(iconNames)} as const;`;
    const iconTypeName = getIconSetIconType(iconSetName);
    const iconTypeDeclaration = `type ${iconTypeName} = (typeof ${iconListName})[number]`;
    const fileContent = `
  ${iconListDeclaration}

  ${iconTypeDeclaration}
  `;
    const iconTypeFilePath = `./types/${iconSetName}.d.ts`;
    fs_1.default.writeFileSync(iconTypeFilePath, fileContent);
});
const getIconSetIconType = (iconSetName) => {
    return `${iconSetName}Icon`;
};
const generateIconType = (iconSets) => __awaiter(void 0, void 0, void 0, function* () {
    const iconTypeFilePath = "./types/Icon.d.ts";
    let iconSetMapDeclaration = `type IconSetMap = {\n`;
    iconSets.forEach((iconSetName) => {
        iconSetMapDeclaration += `\t${iconSetName}: ${getIconSetIconType(iconSetName)};\n`;
    });
    iconSetMapDeclaration += `}`;
    const fileContent = `
${iconSetMapDeclaration}

type IconSet = keyof IconSetMap;
`;
    fs_1.default.writeFileSync(iconTypeFilePath, fileContent);
});
const generateIconComponent = (iconSets) => __awaiter(void 0, void 0, void 0, function* () {
    const iconTypeFilePath = "./src/Icon.tsx";
    let importContent = iconSets
        .map((name) => `import ${name} from "react-native-vector-icons/${name}";`)
        .join("\n");
    importContent += `
import {
  IconProps as VectorIconProps,
  IconButtonProps as VectorIconButtonProps,
} from "react-native-vector-icons/Icon";
`;
    let getVectorIconComponentContent = `const getVectorIconComponent = (iconSet: IconSet) => {
\tswitch (iconSet) {\n`;
    getVectorIconComponentContent += iconSets
        .map((name) => `\t\tcase "${name}":
\t\t\treturn ${name};`)
        .join("\n");
    getVectorIconComponentContent += `
\t\tdefault:
\t\t\treturn MaterialIcons;
\t}
};
`;
    const fileContent = `import React, { memo } from "react";

${importContent}
  
const typedMemo: <T>(c: T) => T = React.memo;

interface IconProps<T extends IconSet> extends VectorIconProps {
  set: T;
  name: IconSetMap[T];
}

const IconComponent = <T extends IconSet>({ set, ...props }: IconProps<T>) => {
  const VectorIconComponent = getVectorIconComponent(set);

  return <VectorIconComponent {...props} />;
};

export const Icon = typedMemo(IconComponent);

interface IconButtonProps<T extends IconSet> extends VectorIconButtonProps {
  set: T;
  name: IconSetMap[T];
}

const IconButtonComponent = <T extends IconSet>({
  set,
  ...props
}: IconButtonProps<T>) => {
  const VectorIconButtonComponent = getVectorIconComponent(set).Button;

  return <VectorIconButtonComponent {...props} />;
};

export const IconButton = typedMemo(IconButtonComponent);

${getVectorIconComponentContent}
`;
    fs_1.default.writeFileSync(iconTypeFilePath, fileContent);
});
const start = (iconSets) => __awaiter(void 0, void 0, void 0, function* () {
    const ops = iconSets.map((iconSetName) => {
        return generateTypesForIconSet(iconSetName);
    });
    yield Promise.all(ops);
    yield generateIconType(iconSets);
    yield generateIconComponent(iconSets);
});
start(Object.values(IconSets));
