import React, { useContext, useRef } from 'react';
import Button from '~/components/Button';
import { StepsContext } from '~/context/StepsContext';
import { addEmail, addName, addPhone } from '~/store/stepsSlice';
import Container from '../Container';
import styles from './styles.module.scss';
import { useAppSelector, useAppDispatch } from '~/hooks';

const InfoTab = () => {
  const { activeStep, setActiveStep } = useContext(StepsContext);

  const { name, email, phone } = useAppSelector((state) => state.steps);

  const dispatch = useAppDispatch();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !nameInputRef.current ||
      !emailInputRef.current ||
      !phoneInputRef.current
    )
      return;

    dispatch(addName(nameInputRef.current.value));
    dispatch(addEmail(emailInputRef.current.value));
    dispatch(addPhone(phoneInputRef.current.value));

    setActiveStep(activeStep + 1);
  };

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
            required
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className={styles.input}
            defaultValue={name}
            ref={nameInputRef}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email Address
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className={styles.input}
            defaultValue={email}
            ref={emailInputRef}
          />
        </label>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            required
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className={styles.input}
            defaultValue={phone}
            ref={phoneInputRef}
          />
        </label>
        <div className={styles.btn}>
          <Button type="submit" next>
            Next Step
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default InfoTab;
