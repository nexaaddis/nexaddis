import * as React from "react";

function SvgComponent(props) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={30} height={50} viewBox="0 0 30 25" {...props}>
  <g data-name="Group 101" transform="translate(-375 -21)">
    <rect data-name="Rectangle 12" width={24} height={10} rx={4} transform="translate(380 29)" fill="#e70013" />
    <rect data-name="Rectangle 15" width={24} height={10} rx={4} transform="translate(375 39)" fill="#ffcd00" />
    <rect data-name="Rectangle 11" width={24} height={10} rx={4} transform="translate(375 19)" fill="#009639" />
  </g>
</svg>


  );
}

export default SvgComponent;
