import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PostsIcon = ({ focused }) => {
  // const color = focused ? "#212121" : "#FFFFFF";
  // const bgColor = focused ? "#F6F6F6" : "#FF6C00";

  return (
    <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill="#F6F6F6" d="M8 8h24v24H8z" />
      <Path
        clipRule="evenodd"
        d="M11 11h7v7h-7v-7Zm11 0h7v7h-7v-7Zm0 11h7v7h-7v-7Zm-11 0h7v7h-7v-7Z"
        stroke="#212121"
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
