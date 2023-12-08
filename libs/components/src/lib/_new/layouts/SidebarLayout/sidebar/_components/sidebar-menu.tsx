import { useContext } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from '../../../../contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
  padding: 16px 10px 26px 10px;
    & > .MuiList-root {
      padding: 0;
    }
  }

    .MuiListSubheader-root {
      line-height: 1.4;
    }
`
);

import '@cashier/theme';

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.sidebar.background};
            color: ${theme.colors.primary.main};
          }
        }

        .MuiButton-root {
          display: flex;
          padding: 1px 12px;
          border-radius: 4px;
          color: ${theme.colors.primary.main};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.secondary.main};
            font-size: ${theme.typography.pxToRem(16)};
            margin-right: ${theme.spacing(2)};
          }

          .MuiButton-endIcon {
            color: ${theme.colors.secondary.main};
            margin-left: auto;
          }

          &.active,
          &:hover {
            background-color: ${theme.colors.secondary.main};
            color: ${theme.colors.alpha.white[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.white[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(5)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  return (
    <MenuWrapper>
      <SubMenuWrapper>
        <List component="div">
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/dashboards/crypto"
              startIcon={<BrightnessLowTwoToneIcon />}
            >
              Cryptocurrency
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/dashboards/messenger"
              startIcon={<MmsTwoToneIcon />}
            >
              Messenger
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/management/transactions"
              startIcon={<TableChartTwoToneIcon />}
            >
              Transactions List
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/management/users"
              startIcon={<TableChartTwoToneIcon />}
            >
              Users
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/management/profile/details"
              startIcon={<AccountCircleTwoToneIcon />}
            >
              User Profile
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/management/profile/settings"
              startIcon={<DisplaySettingsTwoToneIcon />}
            >
              Account Settings
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/buttons"
              startIcon={<BallotTwoToneIcon />}
            >
              Buttons
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/modals"
              startIcon={<BeachAccessTwoToneIcon />}
            >
              Modals
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/accordions"
              startIcon={<EmojiEventsTwoToneIcon />}
            >
              Accordions
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/tabs"
              startIcon={<FilterVintageTwoToneIcon />}
            >
              Tabs
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/badges"
              startIcon={<HowToVoteTwoToneIcon />}
            >
              Badges
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/tooltips"
              startIcon={<LocalPharmacyTwoToneIcon />}
            >
              Tooltips
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/avatars"
              startIcon={<RedeemTwoToneIcon />}
            >
              Avatars
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/cards"
              startIcon={<SettingsTwoToneIcon />}
            >
              Cards
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/components/forms"
              startIcon={<TrafficTwoToneIcon />}
            >
              Forms
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/status/500"
              startIcon={<CameraFrontTwoToneIcon />}
            >
              Error 500
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/status/coming-soon"
              startIcon={<ChromeReaderModeTwoToneIcon />}
            >
              Coming Soon
            </Button>
          </ListItem>
          <ListItem component="div">
            <Button
              disableRipple
              component={RouterLink}
              onClick={closeSidebar}
              to="/status/maintenance"
              startIcon={<WorkspacePremiumTwoToneIcon />}
            >
              Maintenance
            </Button>
          </ListItem>
        </List>
      </SubMenuWrapper>
    </MenuWrapper>
  );
}

export default SidebarMenu;
