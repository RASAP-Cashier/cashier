import { action, makeObservable, observable } from 'mobx';

enum WidgetStyle {
  Rounded = 'Rounded'
}

enum WidgetFont {
  Default = 'System (Default)'
}

enum WidgetLayout {
  Panoramic = 'Panoramic'
}

enum WidgetPaymentMethods {
  Tabs = 'Tabs'
}

interface IWidgetSettings {
  brandColors: string;
  style: WidgetStyle;
  font: WidgetFont;
  buttonText: string;
  layout: WidgetLayout;
  paymentMethods: WidgetPaymentMethods;
  billingInformation: boolean;
  policies: boolean;
  coupons: boolean;
  tax: boolean;
  shipping: boolean;
  delivery: boolean;
}

const DefaultWidgetSettings: IWidgetSettings = {
  brandColors: '#006FBE',
  style: WidgetStyle.Rounded,
  font: WidgetFont.Default,
  buttonText: 'Deposit',
  layout: WidgetLayout.Panoramic,
  paymentMethods: WidgetPaymentMethods.Tabs,
  billingInformation: false,
  policies: false,
  coupons: false,
  tax: false,
  shipping: false,
  delivery: false,
};

export class WidgetSettingsModel {
  @observable
  public brandColors = DefaultWidgetSettings.brandColors;
  @observable
  public style = DefaultWidgetSettings.style;
  @observable
  public font = DefaultWidgetSettings.font;
  @observable
  public buttonText = DefaultWidgetSettings.buttonText;
  @observable
  public layout = DefaultWidgetSettings.layout;
  @observable
  public paymentMethods = DefaultWidgetSettings.paymentMethods;
  @observable
  public billingInformation = DefaultWidgetSettings.billingInformation;
  @observable
  public policies = DefaultWidgetSettings.policies;
  @observable
  public coupons = DefaultWidgetSettings.coupons;
  @observable
  public tax = DefaultWidgetSettings.tax;
  @observable
  public shipping = DefaultWidgetSettings.shipping;
  @observable
  public delivery = DefaultWidgetSettings.delivery;

  constructor() {
    makeObservable(this);
  }

  @action
  public updateSettings(key: keyof IWidgetSettings, value) {
    this[key] = value as any as never;
  }

  @action
  public loadFromServer<T>(key: keyof IWidgetSettings, value: T) {
    this[key] = value as any as never;
  }
}
