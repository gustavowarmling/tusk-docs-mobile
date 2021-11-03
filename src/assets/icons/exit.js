import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.167 1.167h3.5c.32 0 .583-.263.583-.584A.585.585 0 004.667 0h-3.5A1.17 1.17 0 000 1.167v8.166A1.17 1.17 0 001.167 10.5h3.5c.32 0 .583-.262.583-.583a.585.585 0 00-.583-.584h-3.5V1.167z"
        fill="#E33B30"
      />
      <Path
        d="M10.296 5.046L8.668 3.418a.292.292 0 00-.501.204v1.045H4.083a.585.585 0 00-.583.583c0 .32.263.583.583.583h4.084v1.044c0 .263.315.391.495.205l1.628-1.628a.287.287 0 00.006-.408z"
        fill="#E33B30"
      />
    </Svg>
  );
}

export default SvgComponent;
