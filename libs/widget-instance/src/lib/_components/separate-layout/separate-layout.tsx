import * as React from 'react';
import { ISeparateLayoutProps } from './separate-layout.interface';
import HorizontalStepper from './horizontal-stepper';
import { useTranslation } from 'react-i18next';
import { ISteps } from './horizontal-stepper.interface';

export const SeparateLayout = (props: ISeparateLayoutProps) => {
  const { step1Component, step2Component } = props;
  const [t] = useTranslation();

  const steps: ISteps = {
    0: {
      id: 0,
      label: t('widget.stepperStep1') as string,
      isOptional: false,
      component: step1Component,
    },
    1: {
      id: 1,
      label: t('widget.stepperStep2') as string,
      isOptional: false,
      component: step2Component,
    },
  };

  return (
    <HorizontalStepper steps={steps}/>
  );
};
