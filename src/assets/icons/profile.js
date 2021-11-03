import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color }) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        opacity={0.4}
        d="M7 1.75c.963 0 1.75.788 1.75 1.75 0 .963-.787 1.75-1.75 1.75S5.25 4.463 5.25 3.5c0-.962.787-1.75 1.75-1.75zm0 7.875c2.363 0 5.075 1.129 5.25 1.75v.875H1.75v-.866c.175-.63 2.888-1.759 5.25-1.759zM7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm0 7.875c-2.336 0-7 1.172-7 3.5V14h14v-2.625c0-2.328-4.664-3.5-7-3.5z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
