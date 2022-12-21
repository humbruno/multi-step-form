/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'reset' | 'submit' | undefined;
  next?: boolean;
  back?: boolean;
  confirm?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  next,
  back,
  onClick,
  type,
  confirm,
}: ButtonProps) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`${styles.button} ${next && styles.next} ${
      back && styles.back
    } ${confirm && styles.confirm}`}
  >
    {children}
  </button>
);

export default Button;
