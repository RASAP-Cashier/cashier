import React from 'react';
import { Box, Divider, List, ListItem, styled } from '@mui/material';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import '@cashier/theme';
import { TransactionIcon } from '../../../../../icons';
import { SidebarMenuItem } from './sidebar-menu-item';
import { SideMenuDivider } from './sidebar-menu-divider';

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
`,
);

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
    'opacity',
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
`,
);

export function SidebarMenu() {
  return (
    <MenuWrapper>
      <SubMenuWrapper>
        <List component="div">
          <SidebarMenuItem
            textKey={'sidebar.transactions'}
            route={'/transactions/widget-builder'}
            icon={<TransactionIcon/>}
          />
          <SidebarMenuItem
            textKey={'sidebar.technical'}
            route={'/technical/components'}
            icon={<TableChartTwoToneIcon/>}
          />
          <SideMenuDivider />
          <SidebarMenuItem
            textKey={'sidebar.sign-out'}
            route={'/sign-out'}
            icon={<LogoutIcon/>}
          />
        </List>
      </SubMenuWrapper>
    </MenuWrapper>
  );
}
