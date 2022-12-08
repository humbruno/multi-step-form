/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
}

const PlanCard = ({ element, onClick, selected }: PlanCardProps) => (
  <li
    className={`${styles.container} ${selected && styles.selected}`}
    onClick={() => onClick(element.title.toLowerCase())}
  >
    <img src={element.icon} alt="" aria-hidden="true" className={styles.icon} />
    <strong className={styles.title}>{element.title}</strong>
    <small className={styles.price}>{element.price.monthly}</small>
  </li>
);

export default PlanCard;
