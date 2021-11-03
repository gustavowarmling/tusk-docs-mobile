import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={9}
      height={11}
      viewBox="0 0 9 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.417 3.5v5.833H1.75V3.5h4.667zM5.542 0H2.625l-.583.583H0V1.75h8.167V.583H6.125L5.542 0zm2.041 2.333h-7v7A1.17 1.17 0 001.75 10.5h4.667a1.17 1.17 0 001.166-1.167v-7z"
        fill="#0082CB"
      />
    </Svg>
  );
}

export default SvgComponent;
