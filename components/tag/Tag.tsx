import { PProps } from './Tag.props';

import s from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(s.tag, className, {
        [s.s]: size == 's',
        [s.m]: size == 'm',
        [s.ghost]: color == 'ghost',
        [s.red]: color == 'red',
        [s.grey]: color == 'grey',
        [s.green]: color == 'green',
        [s.primary]: color == 'primary',
      })}
      {...props}>
      {href ? <a>{children}</a> : <>{children}</>}
    </p>
  );
};
