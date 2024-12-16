import React, { memo } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";
import {
  IconProps as VectorIconProps,
  IconButtonProps as VectorIconButtonProps,
} from "react-native-vector-icons/Icon";

  
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

const getVectorIconComponent = (iconSet: IconSet) => {
	switch (iconSet) {
		case "AntDesign":
			return AntDesign;
		case "Entypo":
			return Entypo;
		case "EvilIcons":
			return EvilIcons;
		case "Feather":
			return Feather;
		case "FontAwesome":
			return FontAwesome;
		case "FontAwesome5":
			return FontAwesome5;
		case "FontAwesome5Pro":
			return FontAwesome5Pro;
		case "FontAwesome6":
			return FontAwesome6;
		case "Fontisto":
			return Fontisto;
		case "Foundation":
			return Foundation;
		case "Ionicons":
			return Ionicons;
		case "MaterialCommunityIcons":
			return MaterialCommunityIcons;
		case "MaterialIcons":
			return MaterialIcons;
		case "Octicons":
			return Octicons;
		case "SimpleLineIcons":
			return SimpleLineIcons;
		case "Zocial":
			return Zocial;
		default:
			return MaterialIcons;
	}
};

