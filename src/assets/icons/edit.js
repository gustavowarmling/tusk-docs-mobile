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
        d="M0 8.313V10.5h2.188l6.451-6.452-2.187-2.187L0 8.313zm1.703 1.02h-.536v-.536l5.285-5.285.536.536-5.285 5.285zm8.628-7.799L8.966.17A.573.573 0 008.552 0a.574.574 0 00-.409.17L7.076 1.236l2.187 2.187 1.068-1.067a.58.58 0 000-.823z"
        fill="#0082CB"
      />
    </Svg>
  );
}

export default SvgComponent;
