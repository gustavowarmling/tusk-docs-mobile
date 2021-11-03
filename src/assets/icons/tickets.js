import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent({ color }) {
  return (
    <Svg
      width={35}
      height={14}
      viewBox="0 0 35 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#prefix__clip0)" fill={color}>
        <Path d="M28.532 19.358h-.703a2.137 2.137 0 01-1.521-.63 2.137 2.137 0 01-.63-1.521c0-.575.224-1.115.63-1.521.406-.406.946-.63 1.521-.63h.703v-4.198H7.29v4.198h.703c.574 0 1.114.224 1.52.63.407.406.63.946.63 1.52 0 .575-.223 1.116-.63 1.522-.406.406-.946.63-1.52.63h-.703v4.197h21.243v-4.197zM8.695 20.695a3.533 3.533 0 001.812-.973 3.534 3.534 0 001.042-2.515c0-.95-.37-1.844-1.042-2.516a3.533 3.533 0 00-1.812-.973v-1.454h18.43v1.454c-.681.136-1.309.47-1.812.973a3.534 3.534 0 00-1.042 2.516c0 .95.37 1.843 1.042 2.515.503.503 1.13.837 1.813.973v1.454H8.695v-1.454z" />
        <Path d="M21.464 16.5h-1.406v1.413h1.406V16.5zM21.465 13.676h-1.407v1.412h1.407v-1.412zM21.464 19.325h-1.406v1.412h1.406v-1.412z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill={color}
            transform="rotate(45 8.67 21.738)"
            d="M0 0h24v24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
