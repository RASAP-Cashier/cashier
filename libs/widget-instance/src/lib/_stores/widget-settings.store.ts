import React from 'react';
import { WidgetSettingsModel } from './widget-settings.model';
import { makeObservable, observable } from 'mobx';

class WidgetSettingsStore {
  @observable
  public widgetSettings: WidgetSettingsModel = new WidgetSettingsModel();

  constructor() {
    makeObservable(this)
  }
}

const widgetSettingsStore = new WidgetSettingsStore();

export const WidgetSettingsStoreContext = React.createContext(widgetSettingsStore);

export const useWidgetSettingsStore = () => React.useContext(WidgetSettingsStoreContext)
