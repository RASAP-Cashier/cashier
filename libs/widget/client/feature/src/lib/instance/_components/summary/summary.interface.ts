import type { ICurrency } from '@cashier/widget/cs';

export type ISummaryProps = {
  currency: ICurrency;
  buttonText: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  companyLogo?: string;
};
