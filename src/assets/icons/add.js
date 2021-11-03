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
        d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm3.6 9.9H9.9v2.7c0 .495-.405.9-.9.9a.903.903 0 01-.9-.9V9.9H5.4a.903.903 0 01-.9-.9c0-.495.405-.9.9-.9h2.7V5.4c0-.495.405-.9.9-.9s.9.405.9.9v2.7h2.7c.495 0 .9.405.9.9s-.405.9-.9.9z"
        fill="#0082CB"
      />
    </Svg>
  );
}

export default SvgComponent;
