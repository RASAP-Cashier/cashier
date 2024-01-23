import { IMerchantInfo } from '@cashier/widget-instance';

export type IBillingInfo = {
  street?: string;
  // TODO implement
};

export type ICardInfo = {
  cardHolderName?: string;
  // TODO implement
};


export type IWidgetStateStore = {
  billingInfo: IBillingInfo;
  cardInfo: ICardInfo;
  merchantInfo: IMerchantInfo;
}
