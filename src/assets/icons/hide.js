import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.65 7.7C19.74 3.74 15.69 1 11 1c-1.53 0-3 .3-4.34.83l2.55 2.55A4.45 4.45 0 0111 4c2.48 0 4.5 2.02 4.5 4.5 0 .64-.14 1.24-.38 1.79l3.17 3.17c1.41-1.11 2.57-2.53 3.35-4.16.25-.5.25-1.1.01-1.6z"
        fill="#000"
      />
      <Path
        d="M11 5.8c-.12 0-.23.02-.34.03l3 3c.01-.11.03-.22.03-.34.01-1.48-1.2-2.69-2.69-2.69zM2.51.51A.996.996 0 101.1 1.92l2.06 2.06C2 5.02 1.04 6.28.35 7.7c-.24.5-.24 1.1 0 1.6C2.26 13.26 6.31 16 11 16c1.26 0 2.47-.2 3.6-.57l3.47 3.47a.996.996 0 101.41-1.41L2.51.51zM11 13c-2.48 0-4.5-2.02-4.5-4.5 0-.36.05-.7.13-1.04l1.78 1.78a2.7 2.7 0 001.84 1.84l1.78 1.78c-.33.09-.67.14-1.03.14z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
