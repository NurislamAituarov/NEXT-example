import { PProps } from './P.props';

import s from './P.module.scss';
import cn from 'classnames';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(s.p, className, {
        [s.s]: size == 's',
        [s.m]: size == 'm',
        [s.l]: size == 'l',
      })}
      {...props}>
      {children}
    </p>
  );
};
