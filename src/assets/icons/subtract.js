import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm3.6 9.9H5.4a.903.903 0 01-.9-.9c0-.495.405-.9.9-.9h7.2c.495 0 .9.405.9.9s-.405.9-.9.9z"
        fill="#0082CB"
      />
    </Svg>
  );
}

export default SvgComponent;
