import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={15}
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 0C6.31 0 2.26 2.74.35 6.7c-.24.5-.24 1.1 0 1.6C2.26 12.26 6.31 15 11 15s8.74-2.74 10.65-6.7c.24-.5.24-1.1 0-1.6C19.74 2.74 15.69 0 11 0zm0 12c-2.48 0-4.5-2.02-4.5-4.5S8.52 3 11 3s4.5 2.02 4.5 4.5S13.48 12 11 12z"
        fill="#000"
      />
      <Path d="M11 10.2a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z" fill="#000" />
    </Svg>
  );
}

export default SvgComponent;
