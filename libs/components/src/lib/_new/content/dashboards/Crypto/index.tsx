import { Helmet } from 'react-helmet-async';
import { PageHeader } from './PageHeader';
import { Footer, PageTitleWrapper } from '../../../components';
import { Container, Grid } from '@mui/material';
import { AccountBalance } from './AccountBalance';
import { Wallets } from './Wallets';
import { AccountSecurity } from './AccountSecurity';
import { WatchList } from './WatchList';
import React from 'react';

export const DashboardCrypto: React.FC = () =>
  <>
    <Helmet>
      <title>Crypto Dashboard</title>
    </Helmet>
    <PageTitleWrapper>
      <PageHeader/>
    </PageTitleWrapper>
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <AccountBalance/>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Wallets/>
        </Grid>
        <Grid item lg={4} xs={12}>
          <AccountSecurity/>
        </Grid>
        <Grid item xs={12}>
          <WatchList/>
        </Grid>
      </Grid>
    </Container>
    <Footer/>
  </>;
