import { memo, SVGProps } from 'react';

const CircleNotificationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_8_44)'>
      <path
        d='M20 3.33333C10.8 3.33333 3.33333 10.8 3.33333 20C3.33333 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33333 20 3.33333ZM20 30.8333C18.6167 30.8333 17.5 29.7167 17.5 28.3333H22.5C22.5 29.7167 21.3833 30.8333 20 30.8333ZM28.3333 26.6667H11.6667V25L13.3333 23.3333V18.9833C13.3333 15.45 15.05 12.45 18.3333 11.6667V10.8333C18.3333 9.88333 19.05 9.16667 20 9.16667C20.95 9.16667 21.6667 9.88333 21.6667 10.8333V11.6667C24.95 12.45 26.6667 15.4667 26.6667 18.9833V23.3333L28.3333 25V26.6667Z'
        fill='#434343'
      />
    </g>
    <defs>
      <clipPath id='clip0_8_44'>
        <rect width={40} height={40} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(CircleNotificationsIcon);
export { Memo as CircleNotificationsIcon };
