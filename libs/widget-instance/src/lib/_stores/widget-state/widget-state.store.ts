import React from 'react';
import { action, makeObservable, observable } from 'mobx';
import { IBillingInfo, ICardInfo, IWidgetStateStore } from './widget-state.interface';
import { IMerchantInfo } from '../../widget-instance.interface';
import { WidgetInstanceService } from '../../widget-instance.service';

class WidgetStateStore implements IWidgetStateStore {
  @observable
  public isLoading = false;

  @observable
  public billingInfo: IBillingInfo = {};

  @observable
  public cardInfo: ICardInfo = {};

  @observable
  public merchantInfo: IMerchantInfo = { amount: 0, currency: '', tax: 0, vat: 0 };

  constructor() {
    makeObservable(this);
  }

  @action
  public updateMerchantInfo(merchantInfo: IMerchantInfo) {
    this.merchantInfo = merchantInfo;
  }

  @action
  public updateCardInfo(cardInfo: ICardInfo) {
    this.cardInfo = cardInfo;
  }

  @action
  public updateBillingInfo(billingInfo: IBillingInfo) {
    this.billingInfo = billingInfo;
  }

  @action
  public async pay() {
    this.isLoading = true;
    await WidgetInstanceService.getInstance().Pay({
      billingInfo: this.billingInfo,
      cardInfo: this.cardInfo,
      merchantInfo: this.merchantInfo,
    })
    this.isLoading = false;
  }
}

const widgetStateStore = new WidgetStateStore();

export const WidgetStateStoreContext = React.createContext(widgetStateStore);

export const useWidgetStateStore = () => React.useContext(WidgetStateStoreContext);
