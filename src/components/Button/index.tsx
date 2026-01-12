import type { ComponentProps } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  color?: 'green' | 'red';
} & ComponentProps<'button'>;

export const Button = ({ color = 'green', children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
};
