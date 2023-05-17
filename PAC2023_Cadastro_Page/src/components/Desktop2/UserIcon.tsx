import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 490 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 7C0 3.134 3.13401 0 7 0H483C486.866 0 490 3.13401 490 7V73C490 76.866 486.866 80 483 80H6.99998C3.13399 80 0 76.866 0 73V7Z'
      fill='#506F79'
    />
  </svg>
);
const Memo = memo(UserIcon);
export { Memo as UserIcon };
