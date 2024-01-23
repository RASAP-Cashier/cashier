import type { ICurrency } from '../../_stores';

export type ISummaryProps = {
  currency: ICurrency;
  buttonText: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  companyLogo?: string;
};
