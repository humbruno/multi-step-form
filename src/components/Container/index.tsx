import React from 'react';
import styles from './styles.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <main className={styles.container}>{children}</main>
);

export default Container;
