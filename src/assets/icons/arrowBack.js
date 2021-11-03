import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.605.274a.905.905 0 00-1.298 0l-6.093 6.2a.752.752 0 000 1.052l6.093 6.2a.905.905 0 001.298 0 .944.944 0 000-1.32l-5.308-5.41 5.315-5.409A.942.942 0 007.605.274z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
