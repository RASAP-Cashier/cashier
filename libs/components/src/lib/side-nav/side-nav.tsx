import { NavLink, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import { MDBox, MDTypography } from '../base';
import SidenavCollapse from './SidenavCollapse';
import SidenavRoot from './SidenavRoot';
import sidenavLogoLabel from './styles/sidenav';
import { setMiniSidenav, useMaterialUIController } from '@cashier/context';
import { useState } from 'react';
import { appRoutes } from '../../../../../apps/cashier-admin/src/app/app.routes';
import brandWhite from '../../../../theme/src/lib/_images/logo-ct.png';
import brandDark from '../../../../theme/src/lib/_images/logo-ct-dark.png';

export function SideNav() {
  const [controller, dispatch] = useMaterialUIController();
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace('/', '');

  let textColor = 'white';

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = 'dark';
  }
  else if (whiteSidenav && darkMode) {
    textColor = 'inherit';
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  // useEffect(() => {
  //   // A function that sets the mini state of the sidenav.
  //   function handleMiniSidenav() {
  //     setMiniSidenav(dispatch, window.innerWidth < 1200);
  //     setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
  //     setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
  //   }
  //
  //   /**
  //    The event listener that's calling the handleMiniSidenav function when resizing the window.
  //   */
  //   window.addEventListener("resize", handleMiniSidenav);
  //
  //   // Call the handleMiniSidenav function to set the state with the initial value.
  //   handleMiniSidenav();
  //
  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener("resize", handleMiniSidenav);
  // }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = appRoutes.filter(item => !item.hidden).map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === 'collapse') {
      returnValue = href
        ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: 'none' }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        )
        : (
          <NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName}/>
          </NavLink>
        );
    }
    else if (type === 'title') {
      returnValue = (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    }
    else if (type === 'divider') {
      returnValue = (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }

    return returnValue;
  });

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const brand = (transparentSidenav && !darkMode) || whiteSidenav
    ? brandDark
    : brandWhite;
  const brandName = 'Cashier';

  return (
    <MDBox pt={3} textAlign="center">
      <SidenavRoot
        color={sidenavColor}
        brand={brand}
        routes={appRoutes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        variant="permanent"
        ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
      >
        <MDBox pt={3} pb={1} px={4} textAlign="center">
          <MDBox
            display={{ xs: 'block', xl: 'none' }}
            position="absolute"
            top={0}
            right={0}
            p={1.625}
            onClick={closeSidenav}
            sx={{ cursor: 'pointer' }}
          >
            <MDTypography variant="h6" color="secondary">
              <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
            </MDTypography>
          </MDBox>
          <MDBox component={NavLink} to="/" display="flex" alignItems="center">
            {brand && <MDBox component="img" src={brand} alt="Brand" width="2rem"/>}
            <MDBox
              width={!brandName && '100%'}
              sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
            >
              <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
                {brandName}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <Divider
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
        <List>{renderRoutes}</List>
      </SidenavRoot>
    </MDBox>
  );
}
