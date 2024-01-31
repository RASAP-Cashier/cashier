import React from 'react';
import { action, makeObservable, observable, toJS } from 'mobx';
import { IBillingInfo, ICardInfo, IWidgetStateStore } from './widget-state.interface';
import { WidgetService } from '../../widget.service';
import { IMerchantInfo, WidgetColorMode } from '@cashier/widget/cs';
import { Language } from '@cashier/i18n';
import { isEqual } from 'lodash';

class WidgetStateStore implements IWidgetStateStore {
  @observable
  public isLoading = false;

  @observable
  public billingInfo: IBillingInfo = {
    address: '', city: '', country: '', phoneNumber: '', postCode: '', state: '', street: '',
  };

  @observable
  public cardInfo: ICardInfo = {
    CVC: '',
    cardHolderName: '',
    cardNumber: '',
  };

  @observable
  public merchantInfo: IMerchantInfo = {
    userId: '',
    amount: 0,
    currency: '',
    tax: 0,
    vat: 0,
    colorMode: WidgetColorMode.Light,
    lang: Language.en,
  };

  constructor() {
    makeObservable(this);
  }

  @action
  public updateMerchantInfo(merchantInfo: IMerchantInfo) {
    if (!isEqual(merchantInfo, this.merchantInfo)) {
      this.merchantInfo = merchantInfo;
    }
  }

  @action
  public updateCardInfo(cardInfo: ICardInfo) {
    if (!isEqual(cardInfo, this.cardInfo)) {
      this.cardInfo = cardInfo;
    }
  }

  @action
  public updateBillingInfo(billingInfo: IBillingInfo) {
    if (!isEqual(billingInfo, this.billingInfo)) {
      this.billingInfo = billingInfo;
    }
  }

  @action
  public async pay() {
    this.toggleIsLoading(true);
    await WidgetService.getInstance().Pay({
      billingInfo: toJS(this.billingInfo),
      cardInfo: toJS(this.cardInfo),
      merchantInfo: toJS(this.merchantInfo),
    });
    this.toggleIsLoading(false);
  }

  @action
  private toggleIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

const widgetStateStore = new WidgetStateStore();

export const WidgetStateStoreContext = React.createContext(widgetStateStore);

export const useWidgetStateStore = () =>
  React.useContext(WidgetStateStoreContext);
