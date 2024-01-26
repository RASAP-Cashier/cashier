import React from 'react';
import { action, makeObservable, observable } from 'mobx';
import { WidgetService } from '../../widget.service';
import {
  DefaultWidgetSettings,
  IPaymentMethod,
  IWidgetSettings,
  IWidgetStylesSettings,
  WidgetColorMode,
} from '@cashier/widget/cs';
import { IWidgetSettingsStore } from './widget-settings.store.interface';

class WidgetSettingsStore implements IWidgetSettingsStore {
  @observable
  public paymentMethods: IPaymentMethod[] = [];

  @observable
  public isLoading = true;

  @observable
  public settings = DefaultWidgetSettings;

  constructor() {
    makeObservable(this);
  }

  public styles(colorMode: WidgetColorMode) {
    return this.settings.colorModeStyles[colorMode];
  }

  @action
  public updateBaseSettings(
    key: keyof Exclude<IWidgetSettings, 'styles'>,
    value
  ) {
    this.settings[key] = value as any as never;
  }

  @action
  public updateStylesSettings(
    key: keyof IWidgetStylesSettings,
    value,
    colorMode: WidgetColorMode
  ) {
    this.settings.colorModeStyles[colorMode][key] = value as any as never;
  }

  @action
  public async loadFromServer(userId: string) {
    this.isLoading = true;
    const widgetSettingsData = await WidgetService.getInstance().LoadSettings({
      userId,
    });
    this.isLoading = false;

    const { settings, paymentMethods } = widgetSettingsData;

    this.settings = settings || this.settings;
    this.paymentMethods = paymentMethods;
  }

  @action
  public async saveToServer() {
    this.isLoading = true;
    await WidgetService.getInstance().SaveSettings(this.settings);
    this.isLoading = false;
  }
}

const widgetSettingsStore = new WidgetSettingsStore();

export const WidgetSettingsStoreContext =
  React.createContext(widgetSettingsStore);

export const useWidgetSettingsStore = () =>
  React.useContext(WidgetSettingsStoreContext);
