import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

export const CameraIcon = ({ addedPhoto }) => {
  const color = addedPhoto ? "#fff" : "#BDBDBD";
  const bgColor = addedPhoto ? "#FFFFFF4D" : "#fff";

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} fill="none">
      <Circle cx={30} cy={30} r={30} fill={bgColor} />
      <G fill={color} clipPath="url(#a)">
        <Path d="M30 33.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
        <Path d="m27 20-1.83 2H22c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2h-3.17L33 20h-6Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={bgColor} d="M18 18h24v24H18z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
