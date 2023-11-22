import * as React from 'react';
import { WidgetInstance } from '@cashier/widget-instance';
import { useLocation } from 'react-router-dom';
import { getWidgetSettings } from './widget-builder.helpers';
import { Helmet } from 'react-helmet-async';
import { Footer, PageTitleWrapper } from '@cashier/components';
import { PageHeader } from './_components';
import { Container } from '@mui/material';

export function WidgetBuilderPage() {
  const { state }: { state: { id?: number } } = useLocation();
  const widgetSettings = getWidgetSettings(state?.id);

  return (
    <>
      <Helmet>
        <title>Widget Builder</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader/>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <WidgetInstance settings={widgetSettings}/>
      </Container>
      <Footer/>
    </>
  );
}
