import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { IHorizontalStepperProps } from './horizontal-stepper.interface';
import { withClasses } from './horizontal-stepper.css';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from '@mui/material';

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

  const [t] = useTranslation();
  const classes = withClasses();

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        {
          activeStep !== 0 &&
          <Button
            onClick={handleBack}
            className={classes.button}
          >
            <KeyboardBackspaceIcon /> {t('Back')}
          </Button>
        }
        <Box sx={{ flex: '1 1 auto' }}/>
        {
          isStepOptional(activeStep) && (
            <Button onClick={handleSkip} className={classes.button}>
              {t('Skip')}
            </Button>
          )
        }
        {
          activeStep !== Object.keys(steps).length - 1 &&
          <Button onClick={handleNext} className={classes.button}>
            {t('Next')} <EastIcon />
          </Button>
        }
      </Box>
      {steps[activeStep].component}
    </Box>
  );
}
