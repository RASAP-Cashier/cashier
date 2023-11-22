import * as React from 'react';
import { WidgetInstance } from '@cashier/widget-instance';
import { useLocation } from 'react-router-dom';
import { getWidgetSettings } from './widget-builder.helpers';
import { Helmet } from 'react-helmet-async';
import { Footer, PageTitleWrapper } from '@cashier/components';
import { PageHeader } from './_components';
import { Container, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export function WidgetBuilderPage() {
  const { state }: { state: { id?: number } } = useLocation();
  const widgetSettings = getWidgetSettings(state?.id);
  const widgetUrl = 'http://localhost:4201';
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Widget Builder</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader/>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={
            <Switch
              checked={previewMode}
              onChange={() => setPreviewMode(!previewMode)}
            />
          }
          label={'Change Mode'}
        />
        <Typography  variant="h5" component="h5">
          {previewMode ? 'Preview Mode' : 'Edit Mode'}
        </Typography>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        {!previewMode && <WidgetInstance settings={widgetSettings}/>}
        {previewMode && <iframe src={widgetUrl} width="100%" height="600" frameBorder="0">Browser not compatible.</iframe>}
      </Container>
      <Footer/>
    </>
  );
}
