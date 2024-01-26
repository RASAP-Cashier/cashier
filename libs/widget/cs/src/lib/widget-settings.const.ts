import {
  IWidgetSettings,
  WidgetColorMode,
  WidgetCornerRadius,
  WidgetFont,
  WidgetFontSize,
  WidgetLayout,
  WidgetPaymentMethodsViewType,
} from './widget-settings.interface';
import { IPaymentMethod, PaymentMethod } from './widget.interface';

export const DefaultWidgetSettings: IWidgetSettings = {
  paymentMethodsViewType: WidgetPaymentMethodsViewType.Minimal,
  layout: WidgetLayout.Single,
  companyLogo: undefined,
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

export const StripePaymentMethod: IPaymentMethod = {
  type: PaymentMethod.Stripe,
  name: PaymentMethod.Stripe,
  title: PaymentMethod.Stripe,
  description: PaymentMethod.Stripe,
  iconBase64:
    'PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA3MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC4xMjUiIHdpZHRoPSI2OS43NSIgaGVpZ2h0PSIzMSIgcng9IjIuNSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy4xMzg0IDguMDg1NzhMMzMuNTM2MSA4Ljg2MjQ2VjUuOTI4MzJMMzcuMTM4NCA1LjE2NjAyVjguMDg1NzhaTTIyLjQ5OTUgNi44MzQ0MkwxOC45OTc2IDcuNTgyMzRMMTguOTgzMiAxOS4xMDMyQzE4Ljk4MzIgMjEuMjMxOSAyMC41NzYzIDIyLjc5OTYgMjIuNzAwNCAyMi43OTk2QzIzLjg3NzIgMjIuNzk5NiAyNC43Mzg0IDIyLjU4MzkgMjUuMjEyIDIyLjMyNVYxOS40MDUyQzI0Ljc1MjcgMTkuNTkyMiAyMi40ODUxIDIwLjI1MzggMjIuNDg1MSAxOC4xMjUxVjEzLjAxOTFIMjUuMjEyVjkuOTU1NTVIMjIuNDg1MUwyMi40OTk1IDYuODM0NDJaTTE0LjAxNzUgMTIuODMxNUMxMy4yNTY4IDEyLjgzMTUgMTIuNzk3NSAxMy4wNDczIDEyLjc5NzUgMTMuNjA4MkMxMi43OTc1IDE0LjIyMDcgMTMuNTg3OSAxNC40OTAxIDE0LjU2ODUgMTQuODI0M0MxNi4xNjcxIDE1LjM2OTIgMTguMjcxMSAxNi4wODY0IDE4LjI4IDE4Ljc0M0MxOC4yOCAyMS4zMTc2IDE2LjIyNzYgMjIuNzk5IDEzLjI0MjQgMjIuNzk5QzEyLjAwODIgMjIuNzk5IDEwLjY1OTEgMjIuNTU0NSA5LjMyNDM3IDIxLjk3OTJWMTguNTU2QzEwLjUyOTkgMTkuMjE3NiAxMi4wNTEyIDE5LjcwNjYgMTMuMjQyNCAxOS43MDY2QzE0LjA0NjIgMTkuNzA2NiAxNC42MjAyIDE5LjQ5MDkgMTQuNjIwMiAxOC44MjkzQzE0LjYyMDIgMTguMTUwOSAxMy43NjM0IDE3Ljg0MDggMTIuNzI5IDE3LjQ2NjRDMTEuMTUzNyAxNi44OTYzIDkuMTY2NSAxNi4xNzcxIDkuMTY2NSAxMy43ODA4QzkuMTY2NSAxMS4yMzUgMTEuMTA0IDkuNzEwNCAxNC4wMTc1IDkuNzEwNEMxNS4yMDg3IDkuNzEwNCAxNi4zODU1IDkuODk3MzggMTcuNTc2NyAxMC4zNzJWMTMuNzUyQzE2LjQ4NiAxMy4xNjIzIDE1LjEwODIgMTIuODMxNSAxNC4wMTc1IDEyLjgzMTVaTTI5LjY3NTUgMTEuMDIxTDI5LjQ0NTggOS45NTY2MUgyNi4zNDU4VjIyLjU0MThIMjkuOTMzOFYxNC4wMTI2QzMwLjc4MDYgMTIuOTA1MSAzMi4yMTU4IDEzLjEwNjUgMzIuNjYwNyAxMy4yNjQ3VjkuOTU2NjFDMzIuMjAxNCA5Ljc4NDAyIDMwLjUyMjIgOS40Njc1OSAyOS42NzU1IDExLjAyMVpNMzMuNTM2MSA5Ljk1NTk1SDM3LjEzODRWMjIuNTQxMUgzMy41MzYxVjkuOTU1OTVaTTYwLjgzMzIgMTYuMjk5MkM2MC44MzMyIDEyLjYxNzIgNTkuMDUzNiA5LjcxMTc3IDU1LjY1MjIgOS43MTE3N0M1Mi4yMzY0IDkuNzExNzcgNTAuMTY5OCAxMi42MTcyIDUwLjE2OTggMTYuMjcwNUM1MC4xNjk4IDIwLjU5OTggNTIuNjA5NiAyMi43ODYgNTYuMTExNCAyMi43ODZDNTcuODE5MyAyMi43ODYgNTkuMTExIDIyLjM5NzYgNjAuMDg2OSAyMS44NTExVjE4Ljk3NDVDNTkuMTExIDE5LjQ2MzUgNTcuOTkxNSAxOS43NjU1IDU2LjU3MDcgMTkuNzY1NUM1NS4xNzg2IDE5Ljc2NTUgNTMuOTQ0MyAxOS4yNzY1IDUzLjc4NjQgMTcuNTc5M0g2MC44MDQ1QzYwLjgwNDUgMTcuNSA2MC44MDk2IDE3LjMxOTkgNjAuODE1NiAxNy4xMTI1QzYwLjgyMzcgMTYuODMwNSA2MC44MzMyIDE2LjQ5ODEgNjAuODMzMiAxNi4yOTkyWk01My43NDM0IDE0LjkzMTZDNTMuNzQzNCAxMy4zMDY0IDU0LjczMzcgMTIuNjMwNCA1NS42Mzc5IDEyLjYzMDRDNTYuNTEzMyAxMi42MzA0IDU3LjQ0NjIgMTMuMzA2NCA1Ny40NDYyIDE0LjkzMTZINTMuNzQzNFpNNDEuODE2NyAxMC44MzM3QzQyLjMxOSAxMC4zNzM0IDQzLjIyMzIgOS43MTE3NyA0NC42Mjk3IDkuNzExNzdDNDcuMTQxMiA5LjcxMTc3IDQ5LjUwOTMgMTEuOTg0MyA0OS41MjM3IDE2LjE1NTRDNDkuNTIzNyAyMC43MTQ4IDQ3LjE4NDMgMjIuNzg2IDQ0LjYxNTMgMjIuNzg2QzQzLjM1MjMgMjIuNzg2IDQyLjU5MTcgMjIuMjUzOCA0Mi4wNzUgMjEuODc5OUw0Mi4wNjA3IDI1Ljk1MDNMMzguNDcyNyAyNi43MTI2VjkuOTQxOUg0MS42MzAxTDQxLjgxNjcgMTAuODMzN1pNNDIuMDc1IDE4Ljk0NDhDNDIuNDE5NCAxOS4zMTg4IDQyLjkyMTggMTkuNjIwOCA0My43Njg1IDE5LjYyMDhDNDUuMDg4OSAxOS42MjA4IDQ1Ljk3ODcgMTguMTgyNSA0NS45Nzg3IDE2LjI1NTJDNDUuOTc4NyAxNC4zNzEgNDUuMDc0NiAxMi45MDM5IDQzLjc2ODUgMTIuOTAzOUM0Mi45NTA1IDEyLjkwMzkgNDIuNDMzOCAxMy4xOTE2IDQyLjA2MDcgMTMuNjA4N0w0Mi4wNzUgMTguOTQ0OFoiIGZpbGw9IiM2NDYxRkMiLz4KPC9zdmc+Cg==',
};

export const CheckoutPaymentMethod: IPaymentMethod = {
  type: PaymentMethod.Checkout,
  name: PaymentMethod.Checkout,
  title: PaymentMethod.Checkout,
  description: PaymentMethod.Checkout,
  iconBase64:
    'PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCA3MCAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC4xMjUiIHdpZHRoPSI2OS43NSIgaGVpZ2h0PSIzMSIgcng9IjIuNSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy4xMzg0IDguMDg1NzhMMzMuNTM2MSA4Ljg2MjQ2VjUuOTI4MzJMMzcuMTM4NCA1LjE2NjAyVjguMDg1NzhaTTIyLjQ5OTUgNi44MzQ0MkwxOC45OTc2IDcuNTgyMzRMMTguOTgzMiAxOS4xMDMyQzE4Ljk4MzIgMjEuMjMxOSAyMC41NzYzIDIyLjc5OTYgMjIuNzAwNCAyMi43OTk2QzIzLjg3NzIgMjIuNzk5NiAyNC43Mzg0IDIyLjU4MzkgMjUuMjEyIDIyLjMyNVYxOS40MDUyQzI0Ljc1MjcgMTkuNTkyMiAyMi40ODUxIDIwLjI1MzggMjIuNDg1MSAxOC4xMjUxVjEzLjAxOTFIMjUuMjEyVjkuOTU1NTVIMjIuNDg1MUwyMi40OTk1IDYuODM0NDJaTTE0LjAxNzUgMTIuODMxNUMxMy4yNTY4IDEyLjgzMTUgMTIuNzk3NSAxMy4wNDczIDEyLjc5NzUgMTMuNjA4MkMxMi43OTc1IDE0LjIyMDcgMTMuNTg3OSAxNC40OTAxIDE0LjU2ODUgMTQuODI0M0MxNi4xNjcxIDE1LjM2OTIgMTguMjcxMSAxNi4wODY0IDE4LjI4IDE4Ljc0M0MxOC4yOCAyMS4zMTc2IDE2LjIyNzYgMjIuNzk5IDEzLjI0MjQgMjIuNzk5QzEyLjAwODIgMjIuNzk5IDEwLjY1OTEgMjIuNTU0NSA5LjMyNDM3IDIxLjk3OTJWMTguNTU2QzEwLjUyOTkgMTkuMjE3NiAxMi4wNTEyIDE5LjcwNjYgMTMuMjQyNCAxOS43MDY2QzE0LjA0NjIgMTkuNzA2NiAxNC42MjAyIDE5LjQ5MDkgMTQuNjIwMiAxOC44MjkzQzE0LjYyMDIgMTguMTUwOSAxMy43NjM0IDE3Ljg0MDggMTIuNzI5IDE3LjQ2NjRDMTEuMTUzNyAxNi44OTYzIDkuMTY2NSAxNi4xNzcxIDkuMTY2NSAxMy43ODA4QzkuMTY2NSAxMS4yMzUgMTEuMTA0IDkuNzEwNCAxNC4wMTc1IDkuNzEwNEMxNS4yMDg3IDkuNzEwNCAxNi4zODU1IDkuODk3MzggMTcuNTc2NyAxMC4zNzJWMTMuNzUyQzE2LjQ4NiAxMy4xNjIzIDE1LjEwODIgMTIuODMxNSAxNC4wMTc1IDEyLjgzMTVaTTI5LjY3NTUgMTEuMDIxTDI5LjQ0NTggOS45NTY2MUgyNi4zNDU4VjIyLjU0MThIMjkuOTMzOFYxNC4wMTI2QzMwLjc4MDYgMTIuOTA1MSAzMi4yMTU4IDEzLjEwNjUgMzIuNjYwNyAxMy4yNjQ3VjkuOTU2NjFDMzIuMjAxNCA5Ljc4NDAyIDMwLjUyMjIgOS40Njc1OSAyOS42NzU1IDExLjAyMVpNMzMuNTM2MSA5Ljk1NTk1SDM3LjEzODRWMjIuNTQxMUgzMy41MzYxVjkuOTU1OTVaTTYwLjgzMzIgMTYuMjk5MkM2MC44MzMyIDEyLjYxNzIgNTkuMDUzNiA5LjcxMTc3IDU1LjY1MjIgOS43MTE3N0M1Mi4yMzY0IDkuNzExNzcgNTAuMTY5OCAxMi42MTcyIDUwLjE2OTggMTYuMjcwNUM1MC4xNjk4IDIwLjU5OTggNTIuNjA5NiAyMi43ODYgNTYuMTExNCAyMi43ODZDNTcuODE5MyAyMi43ODYgNTkuMTExIDIyLjM5NzYgNjAuMDg2OSAyMS44NTExVjE4Ljk3NDVDNTkuMTExIDE5LjQ2MzUgNTcuOTkxNSAxOS43NjU1IDU2LjU3MDcgMTkuNzY1NUM1NS4xNzg2IDE5Ljc2NTUgNTMuOTQ0MyAxOS4yNzY1IDUzLjc4NjQgMTcuNTc5M0g2MC44MDQ1QzYwLjgwNDUgMTcuNSA2MC44MDk2IDE3LjMxOTkgNjAuODE1NiAxNy4xMTI1QzYwLjgyMzcgMTYuODMwNSA2MC44MzMyIDE2LjQ5ODEgNjAuODMzMiAxNi4yOTkyWk01My43NDM0IDE0LjkzMTZDNTMuNzQzNCAxMy4zMDY0IDU0LjczMzcgMTIuNjMwNCA1NS42Mzc5IDEyLjYzMDRDNTYuNTEzMyAxMi42MzA0IDU3LjQ0NjIgMTMuMzA2NCA1Ny40NDYyIDE0LjkzMTZINTMuNzQzNFpNNDEuODE2NyAxMC44MzM3QzQyLjMxOSAxMC4zNzM0IDQzLjIyMzIgOS43MTE3NyA0NC42Mjk3IDkuNzExNzdDNDcuMTQxMiA5LjcxMTc3IDQ5LjUwOTMgMTEuOTg0MyA0OS41MjM3IDE2LjE1NTRDNDkuNTIzNyAyMC43MTQ4IDQ3LjE4NDMgMjIuNzg2IDQ0LjYxNTMgMjIuNzg2QzQzLjM1MjMgMjIuNzg2IDQyLjU5MTcgMjIuMjUzOCA0Mi4wNzUgMjEuODc5OUw0Mi4wNjA3IDI1Ljk1MDNMMzguNDcyNyAyNi43MTI2VjkuOTQxOUg0MS42MzAxTDQxLjgxNjcgMTAuODMzN1pNNDIuMDc1IDE4Ljk0NDhDNDIuNDE5NCAxOS4zMTg4IDQyLjkyMTggMTkuNjIwOCA0My43Njg1IDE5LjYyMDhDNDUuMDg4OSAxOS42MjA4IDQ1Ljk3ODcgMTguMTgyNSA0NS45Nzg3IDE2LjI1NTJDNDUuOTc4NyAxNC4zNzEgNDUuMDc0NiAxMi45MDM5IDQzLjc2ODUgMTIuOTAzOUM0Mi45NTA1IDEyLjkwMzkgNDIuNDMzOCAxMy4xOTE2IDQyLjA2MDcgMTMuNjA4N0w0Mi4wNzUgMTguOTQ0OFoiIGZpbGw9IiM2NDYxRkMiLz4KPC9zdmc+Cg==',
};
