import type { ReactNode } from 'react';
import styles from './styles.module.css';

type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: Readonly<HeadingProps>) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
