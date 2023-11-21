import { DashboardLayout, MDBox, SideNav } from '@cashier/components';
import { LeftMenu } from './_components/left-menu';
import * as React from 'react';
import { WidgetInstance } from '@cashier/widget-instance';
import { useLocation } from 'react-router-dom';
import { getWidgetSettings } from './widget-builder.helpers';

export function WidgetBuilderPage() {
  const location = useLocation();

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // const configsButton = (
  //   <MDBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.25rem"
  //     height="3.25rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <SettingsApplicationsIcon fontSize="large" color="inherit">
  //       settings
  //     </SettingsApplicationsIcon>
  //   </MDBox>
  // );

  const widgetSettings = getWidgetSettings(location.state.id);

  return (
    <DashboardLayout>
      <SideNav/>
      {/*<DashboardNavbar absolute isMini/>*/}
      {/*<LeftMenu />*/}
      {/*{configsButton}*/}
      <MDBox style={{ marginRight: 350 }}>
        <WidgetInstance settings={widgetSettings}/>
        {/*<iframe src={'http://localhost:4201'} frameBorder="0" allowtransparency="yes" scrolling="no" width="100%"*/}
        {/*        height="100%">*/}
        {/*  <p>Your browser does not support iframes.</p>*/}
        {/*</iframe>*/}
        {/*<MDBox mb={3}>*/}
        {/*  <Grid container spacing={3}>*/}
        {/*    <Grid item xs={12} lg={8}>*/}
        {/*      <Grid container spacing={3}>*/}
        {/*        <Grid item xs={12} xl={6}>*/}
        {/*          <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22"/>*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12} md={6} xl={3}>*/}
        {/*          <DefaultInfoCard*/}
        {/*            icon="account_balance"*/}
        {/*            title="salary"*/}
        {/*            description="Belong Interactive"*/}
        {/*            value="+$2000"*/}
        {/*          />*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12} md={6} xl={3}>*/}
        {/*          <DefaultInfoCard*/}
        {/*            icon="paypal"*/}
        {/*            title="paypal"*/}
        {/*            description="Freelance Payment"*/}
        {/*            value="$455.00"*/}
        {/*          />*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12}>*/}
        {/*          <PaymentMethod/>*/}
        {/*        </Grid>*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} lg={4}>*/}
        {/*      <Invoices/>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</MDBox>*/}
        {/*<MDBox mb={3}>*/}
        {/*  <Grid container spacing={3}>*/}
        {/*    <Grid item xs={12} md={7}>*/}
        {/*      <BillingInformation/>*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={12} md={5}>*/}
        {/*      <Transactions/>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</MDBox>*/}
      </MDBox>
      <LeftMenu/>
      {/*<Footer/>*/}
    </DashboardLayout>
  );
}
