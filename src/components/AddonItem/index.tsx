import React from 'react';
import { Addon } from '~/constants/addons';
import PriceModel from '~/constants/priceModel';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { addAddon, removeAddon } from '~/store/addonsStepSlice';
import styles from './styles.module.scss';

interface AddonItemProps {
  element: Addon;
}

const AddonItem = ({ element }: AddonItemProps) => {
  const { addons } = useAppSelector((state) => state.addons);
  const { priceModel } = useAppSelector((state) => state.plans);

  const isYearlyPlanSelected = priceModel === PriceModel.YEARLY;

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
    >
      <input
        type="checkbox"
        name={element.title}
        id={element.title}
        checked={addons.includes(element)}
        onChange={handleClick}
        className={styles.checkbox}
      />
      <label className={styles.label} htmlFor={element.title}>
        <h3 className={styles.title}>{element.title}</h3>
        <p className={styles.description}>{element.description}</p>
      </label>
      <small className={styles.price}>
        {isYearlyPlanSelected ? element.price.yearly : element.price.monthly}
      </small>
    </li>
  );
};

export default AddonItem;
