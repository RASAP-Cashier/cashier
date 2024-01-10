import * as React from 'react';

export type ISteps = {
  [id: number]: IStep;
};

export interface IStep {
  id: number;
  label: string;
  isOptional: boolean;
  component: React.ReactNode;
}

export interface IHorizontalStepperProps {
  steps: ISteps;
}
