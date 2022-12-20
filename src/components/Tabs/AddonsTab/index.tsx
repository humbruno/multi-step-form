import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container';

const AddonsTab = () => (
  <Container>
    <h2 className={styles.title}>Pick add-ons</h2>
    <p className={styles.description}>
      Add-ons help enhance your gaming experience.
    </p>
  </Container>
);

export default AddonsTab;
