import * as React from "react";
import { TextProps } from "react-native";
import getIconType from "./getIconType";

export type IconType =
  | "material"
  | "material-community"
  | "font-awesome"
  | "font-awesome5"
  | "font-awesome-brands"
  | "octicon"
  | "ionicon"
  | "foundation"
  | "evilicon"
  | "simple-line-icon"
  | "zocial"
  | "entypo"
  | "feather"
  | "antdesign"
  | "fontisto";

export interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
}

export default class Icon extends React.PureComponent<
  IconProps & TextProps,
  any
> {
  constructor(props: IconProps) {
    super(props);
  }

  public render() {
    const { type, ...iconProps } = this.props;

    const IconComponent = getIconType(type);
    return <IconComponent {...iconProps} />;
  }
}
