import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { IHorizontalStepperProps } from './horizontal-stepper.interface';

export default function HorizontalStepper(props: IHorizontalStepperProps) {
  const { steps } = props;

  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (stepId: number) => {
    return steps[stepId].isOptional;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error('You can\'t skip a step that isn\'t optional.');
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {steps[activeStep].component}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        {
          activeStep !== 0 &&
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        }
        <Box sx={{ flex: '1 1 auto' }}/>
        {
          isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )
        }
        {
          activeStep !== Object.keys(steps).length - 1 &&
          <Button onClick={handleNext}>
            Next
          </Button>
        }
      </Box>
    </Box>
  );
}
