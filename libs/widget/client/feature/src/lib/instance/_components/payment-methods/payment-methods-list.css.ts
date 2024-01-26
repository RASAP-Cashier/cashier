import { makeWithClasses } from '@cashier/theme';
import { CSSProperties } from '@mui/styles';

export const slideItemStyles: CSSProperties = {
  textAlign: 'center',
  fontSize: '18px',
  background: '#fff',
  display: 'flex',
  borderRadius: 10,
  padding: 10,
  border: '1px solid #000',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  width: 70,
  marginBottom: 20,
};

export const withClasses = makeWithClasses((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  listContainer: {},
  sliderContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    paddingTop: theme.base.spacings.$unit * 4,
    paddingBottom: theme.base.spacings.$unit * 5,
  },
  listItem: {
    paddingTop: theme.base.spacings.$unit,
  },
  slideItem: slideItemStyles,
}));
