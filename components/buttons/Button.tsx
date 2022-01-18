import s from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import Image from 'next/image';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,

  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      // onClick={() => setTrigger()}
      className={cn(s.button, className, {
        [s.primary]: appearance == 'primary',
        [s.ghost]: appearance == 'ghost',
      })}
      {...props}>
      {children}
      {arrow !== 'none' && (
        <svg
          className={cn(s.arrow, {
            [s.down]: arrow == 'down',
            [s.right]: arrow == 'right',
          })}
          fill="gray"
          width="13px"
          height="13px"
          viewBox="0 0 100 85">
          <polygon points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056"></polygon>
        </svg>
      )}
    </button>
  );
};
