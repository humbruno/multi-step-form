/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'reset' | 'submit' | undefined;
  next?: boolean;
  back?: boolean;
  onClick?: () => void;
}

const Button = ({ children, next, back, onClick, type }: ButtonProps) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`${styles.button} ${next && styles.next} ${back && styles.back}`}
  >
    {children}
  </button>
);

export default Button;
