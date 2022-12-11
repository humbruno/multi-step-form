/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PriceModel from '~/constants/priceModel';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { changePricing } from '~/store/planStepSlice';
import styles from './styles.module.scss';

const TogglePill = () => {
  const { priceModel } = useAppSelector((state) => state.plans);
  const dispatch = useAppDispatch();

  const handleClick = (pricing: PriceModel) => {
    dispatch(changePricing(pricing));
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor="month"
        className={priceModel === PriceModel.MONTHLY ? styles.active : ''}
      >
        Monthly
      </label>
      <div className={styles.pill}>
        <input
          type="radio"
          name="price"
          id="month"
          onChange={() => handleClick(PriceModel.MONTHLY)}
          checked={priceModel === PriceModel.MONTHLY}
        />
        <input
          type="radio"
          name="price"
          id="year"
          className={styles.year}
          onChange={() => handleClick(PriceModel.YEARLY)}
          checked={priceModel === PriceModel.YEARLY}
        />
        <div className={styles.dot} />
      </div>
      <label
        htmlFor="year"
        className={priceModel === PriceModel.YEARLY ? styles.active : ''}
      >
        Yearly
      </label>
    </div>
  );
};

export default TogglePill;
