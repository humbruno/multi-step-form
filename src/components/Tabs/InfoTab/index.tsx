import React, { useContext } from 'react';
import Button from '~/components/Button';
import { StepsContext } from '~/context/StepsContext';
import Container from '../Container';
import styles from './styles.module.scss';

const InfoTab = () => {
  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { activeStep, setActiveStep } = useContext(StepsContext);

  return (
    <Container>
      <h2 className={styles.title}>Personal info</h2>
      <p className={styles.description}>
        Please provide your name, email address, and phone number.
      </p>
      <form className={styles.form} onSubmit={handleFormSubmission}>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className={styles.input}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email Address
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className={styles.input}
          />
        </label>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className={styles.input}
          />
        </label>
      </form>
      <div className={styles.btn}>
        <Button next onClick={() => setActiveStep(activeStep + 1)}>
          Next Step
        </Button>
      </div>
    </Container>
  );
};

export default InfoTab;
