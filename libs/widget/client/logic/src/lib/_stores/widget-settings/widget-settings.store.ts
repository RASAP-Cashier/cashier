import React from 'react';
import { action, computed, makeObservable, observable } from 'mobx';
import { WidgetService } from '../../widget.service';
import { DefaultWidgetSettings, IWidgetSettings, IWidgetStylesSettings, WidgetColorMode } from '@cashier/widget/cs';

class WidgetStylesSettings implements IWidgetStylesSettings {
  @observable
  public font = DefaultWidgetSettings.allColorModesStyles[this.colorMode].font;

  @observable
  public fontSize = DefaultWidgetSettings.allColorModesStyles[this.colorMode].fontSize;

  @observable
  public cornerRadius = DefaultWidgetSettings.allColorModesStyles[this.colorMode].cornerRadius;

  @observable
  public fieldColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].fieldColor;

  @observable
  public iconColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].iconColor;

  @observable
  public lineColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].lineColor;

  @observable
  public textColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].textColor;

  @observable
  public backgroundColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].backgroundColor;

  @observable
  public buttonBackgroundColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].buttonBackgroundColor;

  @observable
  public buttonTextColor = DefaultWidgetSettings.allColorModesStyles[this.colorMode].buttonTextColor;

  constructor(private colorMode: WidgetColorMode) {
    makeObservable(this);
  }
}

class WidgetSettingsStore implements IWidgetSettings {
  @observable
  public isLoading = true;

  @observable
  public colorMode = DefaultWidgetSettings.colorMode;

  @observable
  public currency = DefaultWidgetSettings.currency;

  @observable
  public companyLogo = DefaultWidgetSettings.companyLogo;

  @observable
  public paymentMethodsViewType = DefaultWidgetSettings.paymentMethodsViewType;

  @observable
  public buttonText = DefaultWidgetSettings.buttonText;

  @observable
  public layout = DefaultWidgetSettings.layout;

  @observable
  public allColorModesStyles = {
    [WidgetColorMode.Dark]: new WidgetStylesSettings(WidgetColorMode.Dark),
    [WidgetColorMode.Light]: new WidgetStylesSettings(WidgetColorMode.Light),
  };

  constructor() {
    makeObservable(this);
  }

  @computed
  public get styles() {
    return this.allColorModesStyles[this.colorMode];
  }

  @action
  public updateBaseSettings(key: keyof Exclude<IWidgetSettings, 'styles'>, value) {
    this[key] = value as any as never;
  }

  @action
  public updateStylesSettings(key: keyof IWidgetStylesSettings, value) {
    this.allColorModesStyles[this.colorMode][key] = value as any as never;
  }

  @action
  public async loadFromServer(userId: string) {
    this.isLoading = true;
    const widgetSettingsData = await WidgetService.getInstance().LoadSettings({
      userId,
    });
    this.isLoading = false;

    const { settings, paymentMethods } = widgetSettingsData;

    this.colorMode = settings.colorMode || this.colorMode;
    this.currency = settings.currency || this.currency;
    this.companyLogo = settings.companyLogo || this.companyLogo;
    this.paymentMethodsViewType = settings.paymentMethodsViewType || this.paymentMethodsViewType;
    this.buttonText = settings.buttonText || this.buttonText;
    this.layout = settings.layout || this.layout;
  }

  @action
  public async saveToServer() {
    this.isLoading = true;
    await WidgetService.getInstance().SaveSettings({
      colorMode: this.colorMode,
      currency: this.currency,
      companyLogo: this.companyLogo,
      paymentMethodsViewType: this.paymentMethodsViewType,
      buttonText: this.buttonText,
      layout: this.layout,
    });
    this.isLoading = false;
  }
}

const widgetSettingsStore = new WidgetSettingsStore();

export const WidgetSettingsStoreContext = React.createContext(widgetSettingsStore);

export const useWidgetSettingsStore = () => React.useContext(WidgetSettingsStoreContext);
