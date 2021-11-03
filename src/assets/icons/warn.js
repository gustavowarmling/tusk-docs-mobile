import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={29}
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 6.09l11.637 19.857H5.363L17 6.09zM17 0L0 29h34L17 0zm1.546 21.368h-3.091v3.053h3.09v-3.053zm0-9.157h-3.091v6.105h3.09V12.21z"
        fill="#E33B30"
      />
    </Svg>
  );
}

export default SvgComponent;
