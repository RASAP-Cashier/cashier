import * as React from 'react';
import { ISummaryProps } from './summary.interface';
import { Button, Divider, Grid, Link, SvgIcon } from '@mui/material';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';
import { withClasses } from './summary.css';
import { useWidgetStateStore } from '@cashier/widget/client/logic';
import { observer } from 'mobx-react';

export const Summary = observer((props: ISummaryProps) => {
  const { buttonText, buttonBackgroundColor, buttonTextColor, companyLogo } = props;
  const [t] = useTranslation();
  const classes = withClasses();
  const widgetStateStore = useWidgetStateStore();

  const pay = React.useCallback(() => {
    widgetStateStore.pay();
  }, [widgetStateStore.pay]);

  return (
    <Grid>
      <Grid container className={classes.titleContainer}>
        <BlockTitle titleKey={t('widget.summaryTitle')}/>
      </Grid>
      <Grid container className={classes.contentContainer} pt={1}>
        <Grid item xs={12} className={classes.row}>
          <Grid item xs={6}>
            {t('widget.amount')}
          </Grid>
          <Grid item xs={6} className={classes.value}>
            {widgetStateStore.merchantInfo.currency + ' ' + widgetStateStore.merchantInfo.amount}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Grid item xs={6}>
            {t('widget.shipping')}
          </Grid>
          <Grid item xs={6} className={classes.value}>
            {widgetStateStore.merchantInfo.currency + ' ' + widgetStateStore.merchantInfo.vat}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Grid item xs={6}>
            {t('widget.tax')}
          </Grid>
          <Grid item xs={6} className={classes.value}>
            {widgetStateStore.merchantInfo.currency + ' ' + widgetStateStore.merchantInfo.tax}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.row} pt={1} pb={1}>
          <Divider/>
        </Grid>
        <Grid item xs={12} className={classes.totalRow}>
          <Grid item xs={6}>
            {t('widget.total')}
          </Grid>
          <Grid item xs={6} className={classes.value}>
            {widgetStateStore.merchantInfo.currency + ' ' + widgetStateStore.merchantInfo.amount +
              widgetStateStore.merchantInfo.vat + widgetStateStore.merchantInfo.tax}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.row} pt={1}>
          <Button size="large" fullWidth style={{
            color: buttonTextColor,
            backgroundColor: buttonBackgroundColor,
          }}
                  onClick={pay}>
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Divider title={t('or')}/>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Button size="large" fullWidth style={{
            color: buttonTextColor,
            backgroundColor: 'black',
          }}
                  startIcon={
                    <SvgIcon>
                      `
                      <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.33953 3.82684C6.08961 3.88946 6.83968 3.45116 7.30848 2.89546C7.76947 2.32411 8.07419 1.55709 7.99605 0.774414C7.33192 0.805721 6.51152 1.21271 6.04273 1.78406C5.61299 2.27715 5.24577 3.07548 5.33953 3.82684ZM14.2629 13.9063V1.70443H18.8337C21.1933 1.70443 22.8419 3.33239 22.8419 5.71172C22.8419 8.09105 21.1621 9.73466 18.7712 9.73466H16.1537V13.9063H14.2629ZM7.98844 3.97459C7.32763 3.93649 6.72467 4.17366 6.23765 4.36523C5.92424 4.48851 5.65884 4.5929 5.45692 4.5929C5.23033 4.5929 4.95397 4.48292 4.64369 4.35945C4.23711 4.19765 3.77227 4.01267 3.28482 4.02155C2.16752 4.0372 1.12835 4.67117 0.557976 5.68082C-0.614021 7.70011 0.253256 10.6899 1.38619 12.3335C1.94093 13.1475 2.60506 14.0398 3.48015 14.0085C3.86514 13.9939 4.14208 13.8762 4.42868 13.7544C4.75864 13.6141 5.10141 13.4684 5.63663 13.4684C6.15329 13.4684 6.48107 13.6103 6.79572 13.7465C7.0949 13.8761 7.38221 14.0004 7.80873 13.9928C8.71507 13.9771 9.28545 13.1788 9.84019 12.3648C10.4389 11.4912 10.7019 10.6386 10.7419 10.5092L10.7465 10.4943C10.7456 10.4933 10.7382 10.4899 10.7251 10.4839C10.525 10.3921 8.9954 9.69069 8.98073 7.80969C8.966 6.23086 10.194 5.43093 10.3873 5.30501C10.399 5.29734 10.407 5.29217 10.4106 5.28948C9.62923 4.13112 8.41035 4.0059 7.98844 3.97459ZM26.2959 14.0011C27.4835 14.0011 28.5852 13.3985 29.0852 12.4436H29.1243V13.9072H30.8745V7.83366C30.8745 6.07265 29.4681 4.93778 27.3038 4.93778C25.2958 4.93778 23.8112 6.0883 23.7565 7.6693H25.4598C25.6005 6.91794 26.2959 6.42485 27.2491 6.42485C28.4055 6.42485 29.054 6.9649 29.054 7.95889V8.63199L26.6944 8.77287C24.4988 8.90593 23.3112 9.806 23.3112 11.3713C23.3112 12.9523 24.5379 14.0011 26.2959 14.0011ZM26.8031 12.5534C25.7952 12.5534 25.1545 12.0681 25.1545 11.3246C25.1545 10.5575 25.7717 10.1114 26.9516 10.041L29.0533 9.90792V10.5967C29.0533 11.7394 28.0845 12.5534 26.8031 12.5534ZM36.6794 14.3843C35.9215 16.521 35.0542 17.2254 33.2103 17.2254C33.0696 17.2254 32.6008 17.2097 32.4914 17.1784V15.7148C32.6086 15.7305 32.8977 15.7461 33.0462 15.7461C33.8822 15.7461 34.351 15.3939 34.6401 14.4782L34.812 13.9381L31.6085 5.0548H33.5853L35.8121 12.2632H35.8512L38.078 5.0548H40L36.6794 14.3843ZM16.1539 3.30293H18.3338C19.9746 3.30293 20.9122 4.17952 20.9122 5.72139C20.9122 7.26325 19.9746 8.14768 18.326 8.14768H16.1539V3.30293Z"
                              fill="white"/>
                      </svg>
                      `
                    </SvgIcon>
                  }
          >
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Button size="large" fullWidth style={{
            color: buttonTextColor,
            backgroundColor: 'grey',
          }}
                  startIcon={
                    <SvgIcon>
                      `
                      <svg width="40" height="18" viewBox="0 0 40 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M18.4484 13.6491V8.81555H20.9431C21.9654 8.81555 22.8282 8.47302 23.5316 7.79746L23.7004 7.6262C24.9852 6.22752 24.9008 4.04863 23.5316 2.75461C22.8469 2.06954 21.9091 1.69846 20.9431 1.71749H16.9385V13.6491H18.4484ZM18.4486 7.34992V3.18242H20.9812C21.5253 3.18242 22.0412 3.39175 22.4257 3.77234C23.2418 4.57159 23.2606 5.90366 22.4726 6.73145C22.0881 7.14059 21.544 7.36894 20.9812 7.34992H18.4486ZM30.7436 6.12266C30.0965 5.52323 29.2149 5.21875 28.0989 5.21875C26.664 5.21875 25.5855 5.75158 24.8727 6.80773L26.2044 7.65455C26.6921 6.93142 27.358 6.56986 28.2021 6.56986C28.7366 6.56986 29.2524 6.76967 29.6557 7.13123C30.0496 7.47376 30.2747 7.96854 30.2747 8.49185V8.8439C29.6932 8.52039 28.9617 8.34913 28.0614 8.34913C27.011 8.34913 26.1669 8.59651 25.5386 9.1008C24.9102 9.60508 24.5913 10.2711 24.5913 11.1179C24.5726 11.8886 24.9008 12.6213 25.4823 13.1161C26.0731 13.6489 26.8234 13.9153 27.705 13.9153C28.746 13.9153 29.5713 13.4491 30.1997 12.5166H30.2653V13.6489H31.7096V8.61554C31.7096 7.5594 31.3907 6.72209 30.7436 6.12266ZM26.6456 12.1456C26.3361 11.9172 26.1485 11.5461 26.1485 11.1465C26.1485 10.6993 26.3549 10.3282 26.7582 10.0333C27.1709 9.73833 27.6868 9.58609 28.2965 9.58609C29.1407 9.57657 29.7973 9.76687 30.2663 10.1475C30.2663 10.7945 30.013 11.3558 29.5159 11.8316C29.0657 12.2883 28.456 12.5452 27.8181 12.5452C27.396 12.5547 26.9833 12.412 26.6456 12.1456ZM34.9546 17.236L40.0002 5.48516H38.359L36.0237 11.3463H35.9956L33.6041 5.48516H31.9628L35.2735 13.1256L33.3978 17.236H34.9546Z"
                              fill="white"/>
                        <path
                          d="M13.2354 7.76709C13.2354 7.30087 13.1979 6.83464 13.1229 6.37793H6.75488V9.01354H10.4031C10.2531 9.86035 9.76538 10.6215 9.05261 11.0973V12.8099H11.2284C12.5039 11.6206 13.2354 9.86035 13.2354 7.76709Z"
                          fill="#4285F4"/>
                        <path
                          d="M6.75523 14.4654C8.57466 14.4654 10.1127 13.8564 11.2288 12.8098L9.05296 11.0971C8.44336 11.5158 7.66494 11.7536 6.75523 11.7536C4.99207 11.7536 3.50089 10.5453 2.96631 8.92773H0.724854V10.6975C1.86903 13.0096 4.20428 14.4654 6.75523 14.4654Z"
                          fill="#34A853"/>
                        <path
                          d="M2.96642 8.92833C2.68502 8.08151 2.68502 7.15857 2.96642 6.30223V4.54199H0.724604C-0.241535 6.4735 -0.241535 8.75706 0.724604 10.6886L2.96642 8.92833Z"
                          fill="#FBBC04"/>
                        <path
                          d="M6.75523 3.47581C7.72121 3.45678 8.64968 3.82786 9.34369 4.50341L11.2757 2.54336C10.0471 1.38255 8.43398 0.745056 6.75523 0.764086C4.20428 0.764086 1.86903 2.22937 0.724854 4.54147L2.96631 6.31123C3.50089 4.68419 4.99207 3.47581 6.75523 3.47581Z"
                          fill="#EA4335"/>
                      </svg>
                      `
                    </SvgIcon>
                  }
          >
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.argeementBlock}>
          <Grid item xs={12}>
            {t('By submiting your payment, you agree to the')}
          </Grid>
          <Grid item xs={12}>
            <Link>
              {t('Terms and Conditions and Privacy Policy')}
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.companyLogoBlock}>
          {!!companyLogo && companyLogo}
        </Grid>
        <Grid item xs={12} className={classes.footer}>

        </Grid>
      </Grid>
    </Grid>
  );
});
