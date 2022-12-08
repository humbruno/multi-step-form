import React, { useState } from 'react';
import PlanCard from '~/components/PlanCard';
import PLAN_CARDS from '~/constants/planCards';
import Container from '../Container';
import styles from './styles.module.scss';

const PlanTab = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

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
          />
        ))}
      </ul>
    </Container>
  );
};

export default PlanTab;
