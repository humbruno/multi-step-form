import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container';
import ADDONS from '~/constants/addons';
import AddonItem from '~/components/AddonItem';
import Button from '~/components/Button';
import { useAppDispatch } from '~/hooks';
import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';

const AddonsTab = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <h2 className={styles.title}>Pick add-ons</h2>
      <p className={styles.description}>
        Add-ons help enhance your gaming experience.
      </p>
      <ul className={styles.list}>
        {ADDONS.map((addon) => (
          <AddonItem key={addon.title} element={addon} />
        ))}
      </ul>
      <div className={styles.btn}>
        <Button
          type="button"
          back
          onClick={() => dispatch(changeStep(Steps.PLAN))}
        >
          Go Back
        </Button>
        <Button
          type="button"
          next
          onClick={() => dispatch(changeStep(Steps.SUMMARY))}
        >
          Next Step
        </Button>
      </div>
    </Container>
  );
};

export default AddonsTab;
