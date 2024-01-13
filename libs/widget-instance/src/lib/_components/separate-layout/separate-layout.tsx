import * as React from 'react';
import { ISeparateLayoutProps } from './separate-layout.interface';
import HorizontalStepper from './stepper/horizontal-stepper';
import { useTranslation } from 'react-i18next';
import { ISteps } from './stepper/horizontal-stepper.interface';
import { SingleLayout } from '../single-layout';
import { Card, Box } from '@mui/material';
import { withClasses } from './separate-layout.css';

export const SeparateLayout = (props: ISeparateLayoutProps) => {
  const { step1Component, step2LeftColumnComponent, step2RightColumnComponent } = props;
  const [t] = useTranslation();
  const classes = withClasses();

  const steps: ISteps = {
    0: {
      id: 0,
      label: t('widget.stepperStep1') as string,
      isOptional: false,
      component: (
        <Card>
          <Box className={classes.step1Container}>
            {step1Component}
          </Box>
        </Card>
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
