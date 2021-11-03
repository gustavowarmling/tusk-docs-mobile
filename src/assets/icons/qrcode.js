import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 0H0v5h5V0zM4 4H1V1h3v3z" fill="#454545" />
      <Path d="M3 2H2v1h1V2zM11 0v5h5V0h-5zm4 4h-3V1h3v3z" fill="#454545" />
      <Path d="M14 2h-1v1h1V2zM0 16h5v-5H0v5zm1-4h3v3H1v-3z" fill="#454545" />
      <Path
        d="M3 13H2v1h1v-1zM10 0H8v1h2V0zM8 4h1V3h1V2H7V1H6v2h2v1zM7 4H6v1h1V4zM10 5H9v1H6v1h4V5zM1 9h1V8H1V6H0v4h1V9zM3 6H2v1h1V6z"
        fill="#454545"
      />
      <Path
        d="M6 10h2V9H7V8H5V6H4v2H3v2h1V9h2v1zM10 8H9v2h1V8zM9 11H6v1h2v3H6v1h3v-1h2v-1H9v-3z"
        fill="#454545"
      />
      <Path
        d="M7 13H6v1h1v-1zM11 11h-1v2h1v-2zM15 13h-3v3h1v-2h2v-1z"
        fill="#454545"
      />
      <Path
        d="M16 15h-2v1h2v-1zM16 11h-1v1h1v-1zM12 12h1V9h-2v1h1v2zM14 7h-1V6h-1v1h-1v1h4V7h1V6h-2v1zM16 9h-2v1h2V9z"
        fill="#454545"
      />
    </Svg>
  );
}

export default SvgComponent;
