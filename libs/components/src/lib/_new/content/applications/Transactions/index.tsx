import { Helmet } from 'react-helmet-async';
import { PageHeader } from './PageHeader';
import { Footer, PageTitleWrapper } from '../../../components';
import { Container, Grid } from '@mui/material';
import { RecentOrders } from './RecentOrders';

export function ApplicationsTransactions() {
  return <>
    <Helmet>
      <title>Transactions - Applications</title>
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
        spacing={3}
      >
        <Grid item xs={12}>
          <RecentOrders/>
        </Grid>
      </Grid>
    </Container>
    <Footer/>
  </>;
}
