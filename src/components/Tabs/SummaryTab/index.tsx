/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import Button from '~/components/Button';
import PriceModel from '~/constants/priceModel';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { removeAddon } from '~/store/addonsStepSlice';
import { changeStep } from '~/store/stepsSlice';
import { Steps } from '~/types';
import Container from '../Container';
import styles from './styles.module.scss';

const getNumberFromPriceString = (price: string | undefined) => {
  if (!price) return;

  return Number(price.split('$')[1].split('/')[0]);
};

const SummaryTab = () => {
  const { plan, priceModel } = useAppSelector((state) => state.plans);
  const { addons } = useAppSelector((state) => state.addons);
  const dispatch = useAppDispatch();
  const isYearlyPlanSelected = priceModel === PriceModel.YEARLY;

  const getAddonsTotalCost = () => {
    if (addons.length === 0) return 0;

    if (isYearlyPlanSelected) {
      const prices = addons.map((addon) =>
        getNumberFromPriceString(addon.price.yearly)
      );
      return prices.reduce((previous, current) => previous! + current!);
    }

    const prices = addons.map((addon) =>
      getNumberFromPriceString(addon.price.monthly)
    );
    return prices.reduce((previous, current) => previous! + current!);
  };

  const addonCost = getAddonsTotalCost();
  const planCost = getNumberFromPriceString(
    isYearlyPlanSelected ? plan?.price.yearly : plan?.price.monthly
  );
  const totalCost = Number(addonCost) + Number(planCost);

  if (plan === undefined) {
    return (
      <Container>
        <h2 className={styles.title}>Finishing up</h2>
        <p className={styles.description}>
          Double-check everything looks OK before confirming.
        </p>
        <p className={styles.planUndefined}>
          Looks like you haven&apos;t selected a plan yet. Please do it{' '}
          <span onClick={() => dispatch(changeStep(Steps.PLAN))}>here!</span>
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className={styles.title}>Finishing up</h2>
      <p className={styles.description}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.summaryContainer}>
        <div className={styles.planWrapper}>
          <div className={styles.plan}>
            <strong>
              {plan?.title} ({isYearlyPlanSelected ? 'Yearly' : 'Monthly'})
            </strong>
            <small onClick={() => dispatch(changeStep(Steps.PLAN))}>
              Change
            </small>
          </div>
          <small className={styles.planPrice}>
            {isYearlyPlanSelected ? plan?.price.yearly : plan?.price.monthly}
          </small>
        </div>
        <ul className={styles.addonsList}>
          {addons.length === 0 && (
            <li className={styles.addon}>
              <small>No addons selected!</small>
            </li>
          )}
          {addons.length > 0 &&
            addons.map((addon) => (
              <li className={styles.addon} key={addon.title}>
                <small>
                  {addon.title}{' '}
                  <RxCross2
                    color="hsl(354, 84%, 57%)"
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(removeAddon(addon))}
                  />
                </small>
                <span>
                  {isYearlyPlanSelected
                    ? addon.price.yearly
                    : addon.price.monthly}
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.total}>
        <p>Total (per {isYearlyPlanSelected ? 'year' : 'month'})</p>
        <span>
          ${totalCost}/{isYearlyPlanSelected ? 'yr' : 'mo'}
        </span>
      </div>
      <div className={styles.btn}>
        <Button
          type="button"
          back
          onClick={() => dispatch(changeStep(Steps.ADDONS))}
        >
          Go Back
        </Button>
        <Button type="button" confirm>
          Confirm
        </Button>
      </div>
    </Container>
  );
};

export default SummaryTab;
