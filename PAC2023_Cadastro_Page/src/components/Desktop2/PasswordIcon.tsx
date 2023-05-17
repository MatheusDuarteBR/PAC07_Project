import { memo, SVGProps } from 'react';

const PasswordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 346 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 7C0 3.13401 3.13401 0 7 0H339C342.866 0 346 3.13401 346 7V55C346 58.866 342.866 62 339 62H6.99999C3.134 62 0 58.866 0 55V7Z'
      fill='#33515A'
    />
  </svg>
);
const Memo = memo(PasswordIcon);
export { Memo as PasswordIcon };
