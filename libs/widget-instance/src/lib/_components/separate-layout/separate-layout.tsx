import * as React from 'react';
import { ISeparateLayoutProps } from './separate-layout.interface';
import HorizontalStepper from './horizontal-stepper';
import { useTranslation } from 'react-i18next';
import { ISteps } from './horizontal-stepper.interface';
import { PaymentMethodsSlider } from '../payment-methods/payment-methods-slider';
import { CardDetails } from '../card-details';
import { BillingInfo } from '../billing-info';
import { Summary } from '../summary';
import { SingleLayout } from '../single-layout';

export const SeparateLayout = (props: ISeparateLayoutProps) => {
  const { step1Component, step2LeftColumnComponent, step2RightColumnComponent } = props;
  const [t] = useTranslation();

  const steps: ISteps = {
    0: {
      id: 0,
      label: t('widget.stepperStep1') as string,
      isOptional: false,
      component: (
        <>
          {step1Component}
        </>
      ),
    },
    1: {
      id: 1,
      label: t('widget.stepperStep2') as string,
      isOptional: false,
      component: (
        <SingleLayout
          leftColumnComponent={step2LeftColumnComponent}
          rightColumnComponent={step2RightColumnComponent}
        />
      ),
    },
  };

  return (
    <HorizontalStepper steps={steps}/>
  );
};
