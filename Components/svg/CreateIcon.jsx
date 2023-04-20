import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

export const CreateIcon = ({ focused }) => {
  const color = focused ? "#212121" : "#FFFFFF";
  const bgColor = focused ? "#F6F6F6" : "#FF6C00";

  return (
    <Svg width={70} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#a)">
        <Rect width={70} height={40} rx={20} fill={bgColor} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 13.5h-1v6h-6v1h6v6h1v-6h6v-1h-6v-6Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h70v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
