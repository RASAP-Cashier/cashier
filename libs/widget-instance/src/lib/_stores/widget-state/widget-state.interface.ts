import { IMerchantInfo } from '../../widget-instance.interface';

export type IBillingInfo = {
  phoneNumber?: string;
  postCode?: string;
  state?: string;
  city?: string;
  country?: string;
  street?: string;
  address?: string;
};

export type ICardInfo = {
  cardNumber?: string;
  date?: Date;
  CVC?: string;
  cardHolderName?: string;
};


export type IWidgetStateStore = {
  billingInfo: IBillingInfo;
  cardInfo: ICardInfo;
  merchantInfo: IMerchantInfo;
}
