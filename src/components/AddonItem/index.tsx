import React from 'react';
import { Addon } from '~/constants/addons';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { addAddon, removeAddon } from '~/store/addonsStepSlice';
import styles from './styles.module.scss';

interface AddonItemProps {
  element: Addon;
}

const AddonItem = ({ element }: AddonItemProps) => {
  const { addons } = useAppSelector((state) => state.addons);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (addons.includes(element)) {
      dispatch(removeAddon(element));
      return;
    }

    dispatch(addAddon(element));
  };

  return (
    <li
      className={`${styles.container} ${
        addons.includes(element) && styles.selected
      }`}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        name={element.title}
        id={element.title}
        checked={addons.includes(element)}
      />
      <label className={styles.label} htmlFor={element.title}>
        <h3 className={styles.title}>{element.title}</h3>
        <p className={styles.description}>{element.description}</p>
      </label>
      <small className={styles.price}>{element.price.monthly}</small>
    </li>
  );
};

export default AddonItem;
