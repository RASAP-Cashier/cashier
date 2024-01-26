import React from 'react';
import { action, computed, makeObservable, observable } from 'mobx';
import { WidgetService } from '../../widget.service';
import {
  DefaultWidgetSettings,
  IWidgetSettings,
  IWidgetStylesSettings,
  WidgetColorMode,
} from '@cashier/widget/cs';
import { IWidgetSettingsStore } from './widget-settings.store.interface';

class WidgetSettingsStore implements IWidgetSettingsStore {
  @observable
  public paymentMethods = [];

  @observable
  public isLoading = true;

  @observable
  public colorMode = WidgetColorMode.Light;

  @observable
  public settings = DefaultWidgetSettings;

  constructor() {
    makeObservable(this);
  }

  @action
  public updateColorMode(value: WidgetColorMode) {
    this.colorMode = value;
  }

  @computed
  public get styles() {
    return this.settings.colorModeStyles[this.colorMode];
  }

  @action
  public updateBaseSettings(
    key: keyof Exclude<IWidgetSettings, 'styles'>,
    value
  ) {
    this.settings[key] = value as any as never;
  }

  @action
  public updateStylesSettings(key: keyof IWidgetStylesSettings, value) {
    this.settings.colorModeStyles[this.colorMode][key] = value as any as never;
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
