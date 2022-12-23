/* eslint-disable react/require-default-props */
import React from 'react';
import { Plan } from '~/constants/planCards';
import PriceModel from '~/constants/priceModel';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { selectPlan } from '~/store/planStepSlice';
import styles from './styles.module.scss';

interface PlanCardProps {
  element: Plan;
}

const PlanCard = ({ element }: PlanCardProps) => {
  const { priceModel, plan } = useAppSelector((state) => state.plans);
  const dispatch = useAppDispatch();

  const isYearlyPlanSelected = priceModel === PriceModel.YEARLY;
  const isPlanSelected = plan?.title === element.title;

  const handleCardClick = () => {
    dispatch(selectPlan(element));
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
      <div>
        <strong className={styles.title}>{element.title}</strong>
        <p className={styles.price}>
          {isYearlyPlanSelected ? element.price.yearly : element.price.monthly}
        </p>
      </div>
    </li>
  );
};

export default PlanCard;
