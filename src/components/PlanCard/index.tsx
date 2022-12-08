/* eslint-disable react/require-default-props */
import React from 'react';
import styles from './styles.module.scss';

interface PlanCardProps {
  element: {
    title: string;
    price: {
      monthly: string;
      yearly: string;
    };
    icon: string;
  };
  onClick: React.Dispatch<React.SetStateAction<string | null>>;
  selected?: boolean;
  yearly?: boolean;
}

const PlanCard = ({ element, onClick, selected, yearly }: PlanCardProps) => (
  <li
    className={`${styles.container} ${selected && styles.selected}`}
    onClick={() => onClick(element.title.toLowerCase())}
  >
    <img src={element.icon} alt="" aria-hidden="true" className={styles.icon} />
    <strong className={styles.title}>{element.title}</strong>
    <p className={styles.price}>
      {yearly ? element.price.yearly : element.price.monthly}
    </p>
    {yearly && <small className={styles.price__yearly}>2 months free</small>}
  </li>
);

export default PlanCard;
