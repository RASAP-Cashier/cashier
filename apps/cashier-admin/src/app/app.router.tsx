import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import { BaseLayout, SidebarLayout, SuspenseLoader } from '@cashier/components';
import { SignInPage, SignUpPage } from '@cashier/auth';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

// Dashboards

const Crypto = Loader(lazy(() => import('../../../../libs/components/src/lib/_new/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/applications/Transactions'))
);
const Users = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/applications/Users/list'))
);
const UserProfile = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/applications/Users/settings'))
);
const WidgetBuilder = Loader(
  lazy(async () => {
    const lib = await import('@cashier/widget-builder');
    return {
      default: lib.WidgetBuilderPage
    }
  })
);

// Components

const Buttons = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('../../../../libs/components/src/lib/_new/content/pages/Status/Maintenance'))
);

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="dashboards/crypto" replace />
      },
      {
        path: 'sign-in',
        element: <SignInPage/>,
      },
      {
        path: 'sign-up',
        element: <SignUpPage/>,
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'widget-builder',
        element: <WidgetBuilder />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];
