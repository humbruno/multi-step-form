import React from 'react';
import styles from './styles.module.scss';

interface AddonItemProps {
  element: {
    title: string;
    description: string;
    price: {
      monthly: string;
      yearly: string;
    };
  };
}

const AddonItem = ({ element }: AddonItemProps) => (
  <li className={styles.container}>
    <input type="checkbox" name={element.title} id={element.title} />
    <label className={styles.label} htmlFor={element.title}>
      <h3 className={styles.title}>{element.title}</h3>
      <p className={styles.description}>{element.description}</p>
    </label>
    <small className={styles.price}>{element.price.monthly}</small>
  </li>
);

export default AddonItem;
