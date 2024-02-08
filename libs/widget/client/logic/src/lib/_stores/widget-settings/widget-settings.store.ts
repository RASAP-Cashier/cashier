import React from 'react';
import { action, makeObservable, observable, toJS } from 'mobx';
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
  public userId = '1';

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
    value,
  ) {
    this.settings[key] = value as any as never;
  }

  @action
  public updateStylesSettings(
    key: keyof IWidgetStylesSettings,
    value,
    colorMode: WidgetColorMode,
  ) {
    this.settings.colorModeStyles[colorMode][key] = value as any as never;
  }

  @action
  public async loadFromServer(userId: string) {
    this.userId = userId;
    this.toggleIsLoading(true);
    const widgetSettingsData = await WidgetService.getInstance().LoadSettings({
      userId,
    });
    this.toggleIsLoading(false);

    this.paymentMethods = widgetSettingsData.paymentMethods;
    this.updateSettings(widgetSettingsData.settings);
  }

  @action
  public async saveToServer() {
    this.toggleIsLoading(true);
    await WidgetService.getInstance().SaveSettings({
      widgetId: 3,
      userId: this.userId,
      settings: toJS(this.settings),
    });
    this.toggleIsLoading(false);
  }

  @action
  private toggleIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @action
  private updateSettings(settings: IWidgetSettings) {
    this.settings = settings;
  }
}

const widgetSettingsStore = new WidgetSettingsStore();

export const WidgetSettingsStoreContext =
  React.createContext(widgetSettingsStore);

export const useWidgetSettingsStore = () =>
  React.useContext(WidgetSettingsStoreContext);
