import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color }) {
  return (
    <Svg
      width={17}
      height={14}
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.235 2.215l4.118 3.706v6.432h-1.647V7.412H5.765v4.94H4.118v-6.43l4.117-3.707zm0-2.215L0 7.412h2.47V14h4.942V9.059h1.647V14H14V7.412h2.47L8.236 0z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
