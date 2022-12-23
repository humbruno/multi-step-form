import React, { useRef } from 'react';
import styles from './styles.module.scss';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { addEmail, addName, addPhone } from '~/store/infoStepSlice';

import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';

import Button from '~/components/Button';
import Container from '../Container';
import InfoInput from '~/components/InfoInput';

const InfoTab = () => {
  const dispatch = useAppDispatch();
  const { name, email, phone } = useAppSelector((state) => state.info);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const INPUTS = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      id: 'name',
      placeholder: 'e.g. Stephen King',
      defaultValue: name,
      ref: nameInputRef,
    },
    {
      label: 'Email Address',
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      defaultValue: email,
      ref: emailInputRef,
    },
    {
      label: 'Phone Number',
      type: 'tel',
      name: 'phone',
      id: 'phone',
      placeholder: 'e.g. +1 234 567 890',
      defaultValue: phone,
      ref: phoneInputRef,
    },
  ];

  const mappedInputs = INPUTS.map((input) => (
    <InfoInput key={input.id} input={input} />
  ));

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
    dispatch(changeStep(Steps.PLAN));
  };

  return (
    <Container>
      <h2 className={styles.title}>Personal info</h2>
      <p className={styles.description}>
        Please provide your name, email address, and phone number.
      </p>
      <form className={styles.form} onSubmit={handleFormSubmission}>
        {mappedInputs}
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
