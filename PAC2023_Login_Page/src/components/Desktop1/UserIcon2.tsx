import { memo, SVGProps } from 'react';

const UserIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 471 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 7C0 3.13401 3.13401 0 7 0H464C467.866 0 471 3.13401 471 7V67C471 70.866 467.866 74 464 74H7C3.13401 74 0 70.866 0 67V7Z'
      fill='#506F79'
      stroke='#324B53'
    />
  </svg>
);
const Memo = memo(UserIcon2);
export { Memo as UserIcon2 };
