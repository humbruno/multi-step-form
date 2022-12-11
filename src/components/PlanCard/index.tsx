/* eslint-disable react/require-default-props */
import React from 'react';
import { PlanOptions } from '~/constants/planCards';
import PriceModel from '~/constants/priceModel';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { selectPlan } from '~/store/planStepSlice';
import styles from './styles.module.scss';

interface PlanCardProps {
  element: {
    title: PlanOptions;
    price: {
      monthly: string;
      yearly: string;
    };
    icon: string;
  };
}

const PlanCard = ({ element }: PlanCardProps) => {
  const { priceModel, plan } = useAppSelector((state) => state.plans);
  const dispatch = useAppDispatch();

  const isYearlyPlanSelected = priceModel === PriceModel.YEARLY;
  const isPlanSelected = plan === element.title;

  const handleCardClick = () => {
    dispatch(selectPlan(element.title));
  };

  return (
    <li
      className={`${styles.container} ${isPlanSelected && styles.selected}`}
      onClick={handleCardClick}
    >
      <img
        src={element.icon}
        alt=""
        aria-hidden="true"
        className={styles.icon}
      />
      <strong className={styles.title}>{element.title}</strong>
      <p className={styles.price}>
        {isYearlyPlanSelected ? element.price.yearly : element.price.monthly}
      </p>
      {isYearlyPlanSelected && (
        <small className={styles.price__yearly}>2 months free</small>
      )}
    </li>
  );
};

export default PlanCard;
