import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.53 4.941H8.234V0h-4.94v4.941H0l5.765 5.765 5.764-5.765zM0 12.353V14h11.53v-1.647H0z"
        fill="#0082CB"
      />
    </Svg>
  );
}

export default SvgComponent;
