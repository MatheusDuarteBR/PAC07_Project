import { memo, SVGProps } from 'react';

const PersonOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5_25)'>
      <path
        d='M20 9.83333C21.9333 9.83333 23.5 11.4 23.5 13.3333C23.5 15.2667 21.9333 16.8333 20 16.8333C18.0667 16.8333 16.5 15.2667 16.5 13.3333C16.5 11.4 18.0667 9.83333 20 9.83333ZM20 24.8333C24.95 24.8333 30.1667 27.2667 30.1667 28.3333V30.1667H9.83333V28.3333C9.83333 27.2667 15.05 24.8333 20 24.8333ZM20 6.66667C16.3167 6.66667 13.3333 9.65 13.3333 13.3333C13.3333 17.0167 16.3167 20 20 20C23.6833 20 26.6667 17.0167 26.6667 13.3333C26.6667 9.65 23.6833 6.66667 20 6.66667ZM20 21.6667C15.55 21.6667 6.66667 23.9 6.66667 28.3333V33.3333H33.3333V28.3333C33.3333 23.9 24.45 21.6667 20 21.6667Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_25'>
        <rect width={40} height={40} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(PersonOutlineIcon);
export { Memo as PersonOutlineIcon };
