import * as React from 'react';

interface IProps {
  style: any;
}

const Spinner = ({ style }: IProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={style}
  >
    <defs>
      <radialGradient id="glow-ring" cx="0.5" cy="0.5" fx="0" fy="0" r="2">
        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="90%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <g transform="rotate(256.982 50 50)">
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="url(#glow-ring)"
        strokeWidth="10"
        fill="none"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 50 50;360 50 50"
        dur="1s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export default Spinner;
