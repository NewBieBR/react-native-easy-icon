import ZocialIcon from "react-native-vector-icons/Zocial";
import OcticonIcon from "react-native-vector-icons/Octicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import FA5Brands from "react-native-vector-icons/FontAwesome5Pro";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { IconType } from "react-native-easy-icon/src/Icon";
import { Icon } from "react-native-vector-icons/Icon";

const customIcons: Record<string, typeof Icon> = {};

export const registerCustomIconType = (id: string, customIcon: typeof Icon) => {
  customIcons[id] = customIcon;
};

export default (type: IconType) => {
  switch (type) {
    case "zocial":
      return ZocialIcon;
    case "octicon":
      return OcticonIcon;
    case "material":
      return MaterialIcon;
    case "material-community":
      return MaterialCommunityIcon;
    case "ionicon":
      return Ionicon;
    case "foundation":
      return FoundationIcon;
    case "evilicon":
      return EvilIcon;
    case "entypo":
      return EntypoIcon;
    case "font-awesome":
      return FAIcon;
    case "font-awesome5":
      return FA5Icon;
    case "font-awesome-brands":
      return FA5Brands;
    case "simple-line-icon":
      return SimpleLineIcon;
    case "feather":
      return FeatherIcon;
    case "antdesign":
      return AntIcon;
    case "fontisto":
      return FontistoIcon;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};
