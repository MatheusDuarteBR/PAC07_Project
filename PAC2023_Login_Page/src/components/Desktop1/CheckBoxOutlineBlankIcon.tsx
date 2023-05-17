import { memo, SVGProps } from 'react';

const CheckBoxOutlineBlankIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5_18)'>
      <path
        d='M29.2917 7.70833V29.2917H7.70833V7.70833H29.2917ZM29.2917 4.625H7.70833C6.0125 4.625 4.625 6.0125 4.625 7.70833V29.2917C4.625 30.9875 6.0125 32.375 7.70833 32.375H29.2917C30.9875 32.375 32.375 30.9875 32.375 29.2917V7.70833C32.375 6.0125 30.9875 4.625 29.2917 4.625Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_18'>
        <rect width={37} height={37} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(CheckBoxOutlineBlankIcon);
export { Memo as CheckBoxOutlineBlankIcon };
