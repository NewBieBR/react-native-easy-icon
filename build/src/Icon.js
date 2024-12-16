"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const AntDesign_1 = __importDefault(require("react-native-vector-icons/AntDesign"));
const Entypo_1 = __importDefault(require("react-native-vector-icons/Entypo"));
const EvilIcons_1 = __importDefault(require("react-native-vector-icons/EvilIcons"));
const Feather_1 = __importDefault(require("react-native-vector-icons/Feather"));
const FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
const FontAwesome5_1 = __importDefault(require("react-native-vector-icons/FontAwesome5"));
const FontAwesome5Pro_1 = __importDefault(require("react-native-vector-icons/FontAwesome5Pro"));
const Fontisto_1 = __importDefault(require("react-native-vector-icons/Fontisto"));
const Foundation_1 = __importDefault(require("react-native-vector-icons/Foundation"));
const Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
const MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const Octicons_1 = __importDefault(require("react-native-vector-icons/Octicons"));
const SimpleLineIcons_1 = __importDefault(require("react-native-vector-icons/SimpleLineIcons"));
const Zocial_1 = __importDefault(require("react-native-vector-icons/Zocial"));
const typedMemo = react_1.default.memo;
const IconComponent = (_a) => {
    var { set } = _a, props = __rest(_a, ["set"]);
    const VectorIconComponent = getVectorIconComponent(set);
    return react_1.default.createElement(VectorIconComponent, Object.assign({}, props));
};
exports.Icon = typedMemo(IconComponent);
const IconButtonComponent = (_a) => {
    var { set } = _a, props = __rest(_a, ["set"]);
    const VectorIconButtonComponent = getVectorIconComponent(set).Button;
    return react_1.default.createElement(VectorIconButtonComponent, Object.assign({}, props));
};
exports.IconButton = typedMemo(IconButtonComponent);
const getVectorIconComponent = (iconSet) => {
    switch (iconSet) {
        case "AntDesign":
            return AntDesign_1.default;
        case "Entypo":
            return Entypo_1.default;
        case "EvilIcons":
            return EvilIcons_1.default;
        case "Feather":
            return Feather_1.default;
        case "FontAwesome":
            return FontAwesome_1.default;
        case "FontAwesome5":
            return FontAwesome5_1.default;
        case "FontAwesome5Pro":
            return FontAwesome5Pro_1.default;
        case "Fontisto":
            return Fontisto_1.default;
        case "Foundation":
            return Foundation_1.default;
        case "Ionicons":
            return Ionicons_1.default;
        case "MaterialCommunityIcons":
            return MaterialCommunityIcons_1.default;
        case "MaterialIcons":
            return MaterialIcons_1.default;
        case "Octicons":
            return Octicons_1.default;
        case "SimpleLineIcons":
            return SimpleLineIcons_1.default;
        case "Zocial":
            return Zocial_1.default;
        default:
            return MaterialIcons_1.default;
    }
};
