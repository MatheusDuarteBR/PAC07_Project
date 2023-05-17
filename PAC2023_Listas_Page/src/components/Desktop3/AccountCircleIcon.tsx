import { memo, SVGProps } from 'react';

const AccountCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_8_37)'>
      <path
        d='M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 10C27.32 10 30 12.68 30 16C30 19.32 27.32 22 24 22C20.68 22 18 19.32 18 16C18 12.68 20.68 10 24 10ZM24 38.4C19 38.4 14.58 35.84 12 31.96C12.06 27.98 20 25.8 24 25.8C27.98 25.8 35.94 27.98 36 31.96C33.42 35.84 29 38.4 24 38.4Z'
        fill='black'
        fillOpacity={0.5}
      />
    </g>
    <defs>
      <clipPath id='clip0_8_37'>
        <rect width={48} height={48} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(AccountCircleIcon);
export { Memo as AccountCircleIcon };
