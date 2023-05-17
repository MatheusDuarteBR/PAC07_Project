import { memo, SVGProps } from 'react';

const LockOpenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_5_21)'>
      <path
        d='M20 28.3334C21.8333 28.3334 23.3333 26.8334 23.3333 25C23.3333 23.1667 21.8333 21.6667 20 21.6667C18.1667 21.6667 16.6667 23.1667 16.6667 25C16.6667 26.8334 18.1667 28.3334 20 28.3334ZM30 13.3334H28.3333V10C28.3333 5.40002 24.6 1.66669 20 1.66669C15.4 1.66669 11.6667 5.40002 11.6667 10H14.8333C14.8333 7.15002 17.15 4.83335 20 4.83335C22.85 4.83335 25.1667 7.15002 25.1667 10V13.3334H10C8.16667 13.3334 6.66667 14.8334 6.66667 16.6667V33.3334C6.66667 35.1667 8.16667 36.6667 10 36.6667H30C31.8333 36.6667 33.3333 35.1667 33.3333 33.3334V16.6667C33.3333 14.8334 31.8333 13.3334 30 13.3334ZM30 33.3334H10V16.6667H30V33.3334Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_5_21'>
        <rect width={40} height={40} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(LockOpenIcon);
export { Memo as LockOpenIcon };
