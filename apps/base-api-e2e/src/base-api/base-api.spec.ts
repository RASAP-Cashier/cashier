import axios from 'axios';
import {
  ISaveWidgetSettingsParams,
  IWidgetSettings,
  WidgetColorMode,
  WidgetCornerRadius,
  WidgetFont,
  WidgetFontSize,
  WidgetLayout,
  WidgetPaymentMethodsViewType,
  WidgetRoutes,
} from '@cashier/widget/cs';

describe('{BASE_API_URL}/widget/settings', () => {
  it('should update widget settings', async() => {
    const settings: IWidgetSettings = {
      paymentMethodsViewType: WidgetPaymentMethodsViewType.Minimal,
      layout: WidgetLayout.Single,
      buttonText: 'PAY',

      colorModeStyles: {
        // TODO mast change (not ready yet)
        [WidgetColorMode.Dark]: {
          font: WidgetFont.Inter,
          fontSize: WidgetFontSize.Size16,
          cornerRadius: WidgetCornerRadius.Radius7,
          backgroundColor: '#070707',
          textColor: '#fcfbfb',
          fieldColor: '#161616',
          lineColor: '#282829',
          iconColor: '#a48ee4',
          buttonBackgroundColor: '#a48ee4',
          buttonTextColor: '#FFFFFF',
        },
        [WidgetColorMode.Light]: {
          font: WidgetFont.Inter,
          fontSize: WidgetFontSize.Size16,
          cornerRadius: WidgetCornerRadius.Radius7,
          backgroundColor: '#F6F6F6',
          textColor: '#000000',
          fieldColor: '#FFFFFF',
          lineColor: '#E9E6EF',
          iconColor: '#4723AD',
          buttonBackgroundColor: '#4723AD',
          buttonTextColor: '#FFFFFF',
        },
      },
    };

    const dto: ISaveWidgetSettingsParams = {
      widgetId: 28,
      userId: 1,
      settings,
    };

    const res = await axios.post(WidgetRoutes.Settings, dto);

    expect(res.status).toBe(201);
    expect(res.data).toEqual(dto.settings);
  });

  it('should return widget settings', async() => {
    const res = await axios.get(`${WidgetRoutes.Settings}/1`);

    expect(res.status).toBe(200);
    expect(res.data.settings).not.toBeNull();
  });
});
