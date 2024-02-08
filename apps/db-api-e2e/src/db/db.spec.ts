import axios from 'axios';
import {
  WidgetColorMode,
  WidgetCornerRadius,
  WidgetFont,
  WidgetFontSize,
  WidgetLayout,
  WidgetPaymentMethodsViewType,
} from '@cashier/widget/cs';
import { CreateWidgetSettingDto, UpdateWidgetSettingDto } from '@cashier/db/server/logic';

describe('/widget-settings', () => {
  it('should update', async() => {
    const dto: UpdateWidgetSettingDto = {
      widgetId: 28,
      userId: 1,
      configuration: {
        paymentMethodsViewType: WidgetPaymentMethodsViewType.Minimal,
        layout: WidgetLayout.Separate,
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
      },
    };

    const res = await axios.patch(`/widget-settings`, dto);

    expect(res.status).toBe(200);
    expect(res.data.configuration).toEqual(dto.configuration);
  });

  it('should create', async() => {
    const dto: CreateWidgetSettingDto = {
      userId: 1,
      configuration: {
        paymentMethodsViewType: WidgetPaymentMethodsViewType.Basic,
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
      },
    };

    const res = await axios.post(`/widget-settings`, dto);

    expect(res.status).toBe(201);
    expect(res.data[0].configuration).toEqual(dto.configuration);
  });

  it('should return widget settings', async() => {
    const res = await axios.get(`/widget-settings/by-user-id/1`);

    expect(res.status).toBe(200);
    expect(res.data.length).toBe(1);
  });
});
