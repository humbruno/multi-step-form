/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  next?: boolean;
  back?: boolean;
  onClick: () => void;
}

const Button = ({ children, next, back, onClick }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button} ${next && styles.next} ${back && styles.back}`}
  >
    {children}
  </button>
);

export default Button;
