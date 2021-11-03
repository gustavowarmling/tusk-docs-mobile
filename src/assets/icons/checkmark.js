import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={26}
      viewBox="0 0 34 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.518 20.669l-7.09-7.098a1.991 1.991 0 00-2.836 0c-.79.791-.79 2.048 0 2.84l8.488 8.496c.79.79 2.066.79 2.856 0L33.407 3.432c.79-.79.79-2.048 0-2.839a1.991 1.991 0 00-2.835 0L10.518 20.67z"
        fill="#368DCC"
      />
    </Svg>
  );
}

export default SvgComponent;
