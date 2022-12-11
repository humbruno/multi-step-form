/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PriceModel from '~/constants/priceModel';
import styles from './styles.module.scss';

interface PillProps {
  pricingModel: string;
  setPriceModel: React.Dispatch<React.SetStateAction<string>>;
}

const TogglePill = ({ setPriceModel, pricingModel }: PillProps) => {
  const handleClick = (priceModel: string) => {
    setPriceModel(priceModel);
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor="month"
        className={pricingModel === PriceModel.MONTHLY ? styles.active : ''}
      >
        Monthly
      </label>
      <div className={styles.pill}>
        <input
          type="radio"
          name="price"
          id="month"
          onChange={() => handleClick(PriceModel.MONTHLY)}
        />
        <input
          type="radio"
          name="price"
          id="year"
          className={styles.year}
          onChange={() => handleClick(PriceModel.YEARLY)}
        />
        <div className={styles.dot} />
      </div>
      <label
        htmlFor="year"
        className={pricingModel === PriceModel.YEARLY ? styles.active : ''}
      >
        Yearly
      </label>
    </div>
  );
};

export default TogglePill;
