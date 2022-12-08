import React, { useContext, useState } from 'react';
import Button from '~/components/Button';
import PlanCard from '~/components/PlanCard';
import PLAN_CARDS from '~/constants/planCards';
import PriceModel from '~/constants/priceModel';
import { StepsContext } from '~/context/StepsContext';
import Container from '../Container';
import styles from './styles.module.scss';

const PlanTab = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [priceModel, setPriceModel] = useState<string>(PriceModel.MONTHLY);
  const { activeStep, setActiveStep } = useContext(StepsContext);

  return (
    <Container>
      <h2 className={styles.title}>Select your plan</h2>
      <p className={styles.description}>
        You have the option of monthly or yearly billing.
      </p>
      <ul className={styles.plan__list}>
        {PLAN_CARDS.map((item) => (
          <PlanCard
            element={item}
            key={item.title}
            onClick={setSelectedCard}
            selected={selectedCard === item.title.toLowerCase()}
            yearly={priceModel === PriceModel.YEARLY}
          />
        ))}
      </ul>
      <div className={styles.price__container}>
        <label
          htmlFor="monthly"
          onClick={() => setPriceModel(PriceModel.MONTHLY)}
          className={`${styles.label} ${
            priceModel === PriceModel.MONTHLY && styles.selected
          }`}
        >
          Monthly
          <input type="radio" name="price" id="monthly" />
        </label>
        <label
          htmlFor="yearly"
          onClick={() => setPriceModel(PriceModel.YEARLY)}
          className={`${styles.label} ${
            priceModel === PriceModel.YEARLY && styles.selected
          }`}
        >
          <input type="radio" name="price" id="yearly" />
          Yearly
        </label>
      </div>
      <div className={styles.btn}>
        <Button back onClick={() => setActiveStep(activeStep - 1)}>
          Go Back
        </Button>
        <Button next onClick={() => setActiveStep(activeStep + 1)}>
          Next Step
        </Button>
      </div>
    </Container>
  );
};

export default PlanTab;