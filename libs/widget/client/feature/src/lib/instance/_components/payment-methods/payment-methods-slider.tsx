import * as React from 'react';
import { Box } from '@mui/material';
import { BlockTitle } from '../block-title';
import { useTranslation } from 'react-i18next';
import { slideItemStyles, withClasses } from './payment-methods-list.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export const PaymentMethodsSlider = () => {
  const [t] = useTranslation();
  const classes = withClasses();

  const handleChange = React.useCallback(() => {
    // TODO implement save this method and use like mayment method
  }, []);

  return (
    <Box className={classes.container}>
      <BlockTitle titleKey={t('widget.paymentMethodsTitle')}/>
      <Box className={classes.sliderContainer}>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          style={{
            padding: 30,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={slideItemStyles}>
            <Box onClick={handleChange}>
              {t('Card')}
            </Box>
          </SwiperSlide>
          <SwiperSlide style={slideItemStyles}>
            <Box onClick={handleChange}>
              {t('Bank Wire')}
            </Box>
          </SwiperSlide>
          <SwiperSlide style={slideItemStyles}>
            <Box onClick={handleChange}>
              {t('Checkout')}
            </Box>
          </SwiperSlide>
          <SwiperSlide style={slideItemStyles}>
            <Box onClick={handleChange}>
              {t('Stripe')}
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
