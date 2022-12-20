import React from 'react';
import styles from './styles.module.scss';
import Container from '../Container';
import ADDONS from '~/constants/addons';
import AddonItem from '~/components/AddonItem';

const AddonsTab = () => (
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
  </Container>
);

export default AddonsTab;
