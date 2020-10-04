import React from 'react';

export const ArrowIcon = () => {
  return (
    <svg width='21' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_dd)'>
        <path
          d='M12.39 18.333a.832.832 0 01-.817-.668L10.29 11.36a.833.833 0 00-.651-.65L3.334 9.426a.832.832 0 01-.097-1.606L16.57 3.377a.834.834 0 011.054 1.053L13.18 17.763a.832.832 0 01-.79.57z'
          fill='#fff'
        />
        <mask
          id='a'
          maskUnits='userSpaceOnUse'
          x='2'
          y='3'
          width='16'
          height='16'
        >
          <path
            d='M12.39 18.333a.832.832 0 01-.817-.668L10.29 11.36a.833.833 0 00-.651-.65L3.334 9.426a.832.832 0 01-.097-1.606L16.57 3.377a.834.834 0 011.054 1.053L13.18 17.763a.832.832 0 01-.79.57z'
            fill='#fff'
          />
        </mask>
      </g>
      <defs>
        <filter
          id='filter0_dd'
          x='-1'
          y='-1'
          width='24'
          height='24'
          filterUnits='userSpaceOnUse'
        >
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='.5' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0' />
          <feBlend in2='effect1_dropShadow' result='effect2_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};
