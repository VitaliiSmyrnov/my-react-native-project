import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIcon = () => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20 12H4M10 18l-6-6 6-6"
      stroke="#212121"
      strokeOpacity={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
