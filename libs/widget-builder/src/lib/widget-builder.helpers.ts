export interface IWidgetSettings {
  brandColor: IBrandColor;
  style: IStyle;
  font: IFont;
  buttonText: IButtonText;
  layout: ILayout;
}

type IBrandColor = string;
type IStyle = 'rounded';
type IFont = string;
type IButtonText = string;
type ILayout = 'panoramic';

export function getWidgetSettings(userId: number): IWidgetSettings {
  // TODO
  return {
    brandColor: 'red',
    style: 'rounded',
    font: 'Arial',
    buttonText: 'Deposit',
    layout: 'panoramic',
  };
}
