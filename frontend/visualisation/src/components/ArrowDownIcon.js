import React from 'react';
import styled from 'styled-components';

const ArrowDownIcon = () => (
  <Svg width="18px" height="7px" viewBox="0 0 25 14">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-708.000000, -870.000000)"
        fillRule="nonzero"
        fill="rgb(55, 52, 65)"
      >
        <g transform="translate(708.000000, 870.000000)">
          <path d="M12.4999585,14 C12.0519076,14 11.6039121,13.831934 11.2623134,13.4965087 L0.51285449,2.93607257 C-0.170951497,2.26429782 -0.170951497,1.17513021 0.51285449,0.503627233 C1.19638383,-0.167875744 2.30483671,-0.167875744 2.98869803,0.503627233 L12.4999585,9.84808524 L22.0112743,0.503953363 C22.6950803,-0.167549614 23.8034225,-0.167549614 24.4868965,0.503953363 C25.1710345,1.17545634 25.1710345,2.26462395 24.4868965,2.9363987 L13.7376036,13.4968348 C13.395839,13.8323145 12.9478434,14 12.4999585,14 Z" />
        </g>
      </g>
    </g>
  </Svg>
);

const Svg = styled.svg`
  position: absolute;
  animation: scroll 2s ease-in-out infinite;

  @keyframes scroll {
    0% {
      opacity: 0;
      -webkit-transform: translateY(0.05rem);
      transform: translateY(0.05rem);
    }
    30% {
      opacity: 1;
      -webkit-transform: translateY(0.05rem);
      transform: translateY(0.05rem);
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(1.65rem);
      transform: translateY(1.65rem);
    }
  }
`;

export default ArrowDownIcon;
