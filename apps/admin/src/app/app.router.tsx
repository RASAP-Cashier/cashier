import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { BaseLayout, SidebarLayout, SuspenseLoader } from '@cashier/components';
import { SignInPage, SignUpPage } from '@cashier/auth/client/feature';
import { AuthClientRoutes } from '@cashier/auth/client/logic';

const Loader = Component => props =>
  <Suspense fallback={<SuspenseLoader/>}>
    <Component {...props} />
  </Suspense>;

const Crypto = Loader(
  lazy(
    () => import(
      '@cashier/components'
      ).then(result => ({ default: result.DashboardCrypto })),
  ),
);

const Messenger = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.ApplicationsMessenger })),
  ),
);

const Transactions = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.ApplicationsTransactions })),
  ),
);

const Users = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Users })),
  ),
);

const UserProfile = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.ManagementUserProfile })),
  ),
);

const UserSettings = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.ManagementUserSettings })),
  ),
);

const WidgetBuilder = Loader(
  lazy(
    () =>
      import(
        '@cashier/widget-builder/client/feature'
        ).then(result => ({ default: result.WidgetBuilderPage })),
  ),
);

// Components

const Buttons = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Buttons })),
  ),
);

const Modals = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Modals })),
  ),
);

const Accordions = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Accordions })),
  ),
);

const Tabs = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.TabsDemo })),
  ),
);

const Badges = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Badges })),
  ),
);

const Tooltips = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Tooltips })),
  ),
);

const Avatars = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Avatars })),
  ),
);

const Cards = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Cards })),
  ),
);

const Forms = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Forms })),
  ),
);

const Status404 = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Status404 })),
  ),
);

const Status500 = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.Status500 })),
  ),
);

const StatusComingSoon = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.StatusComingSoon })),
  ),
);

const StatusMaintenance = Loader(
  lazy(
    () =>
      import(
        '@cashier/components'
        ).then(result => ({ default: result.StatusMaintenance })),
  ),
);

const defaultAuthenticatedRoute = 'transactions/widget-builder';

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to={defaultAuthenticatedRoute} replace/>,
      },
      {
        path: AuthClientRoutes.SignIn,
        element: <SignInPage/>,
      },
      {
        path: AuthClientRoutes.SignUp,
        element: <SignUpPage/>,
      },
      {
        path: 'technical',
        children: [
          {
            path: 'status',
            children: [
              {
                path: '',
                element: <Navigate to="404" replace/>,
              },
              {
                path: '404',
                element: <Status404/>,
              },
              {
                path: '500',
                element: <Status500/>,
              },
              {
                path: 'maintenance',
                element: <StatusMaintenance/>,
              },
              {
                path: 'coming-soon',
                element: <StatusComingSoon/>,
              },
            ],
          },
          {
            path: 'dashboards',
            element: <SidebarLayout/>,
            children: [
              {
                path: '',
                element: <Navigate to="crypto" replace/>,
              },
              {
                path: 'crypto',
                element: <Crypto/>,
              },
              {
                path: 'messenger',
                element: <Messenger/>,
              },
            ],
          },
          {
            path: 'management',
            element: <SidebarLayout/>,
            children: [
              {
                path: '',
                element: <Navigate to="transactions" replace/>,
              },
              {
                path: 'transactions',
                element: <Transactions/>,
              },
              {
                path: 'users',
                element: <Users/>,
              },
              {
                path: 'profile',
                children: [
                  {
                    path: '',
                    element: <Navigate to="details" replace/>,
                  },
                  {
                    path: 'details',
                    element: <UserProfile/>,
                  },
                  {
                    path: 'settings',
                    element: <UserSettings/>,
                  },
                ],
              },
            ],
          },
          {
            path: 'components',
            element: <SidebarLayout/>,
            children: [
              {
                path: '',
                element: <Navigate to="buttons" replace/>,
              },
              {
                path: 'buttons',
                element: <Buttons/>,
              },
              {
                path: 'modals',
                element: <Modals/>,
              },
              {
                path: 'accordions',
                element: <Accordions/>,
              },
              {
                path: 'tabs',
                element: <Tabs/>,
              },
              {
                path: 'badges',
                element: <Badges/>,
              },
              {
                path: 'tooltips',
                element: <Tooltips/>,
              },
              {
                path: 'avatars',
                element: <Avatars/>,
              },
              {
                path: 'cards',
                element: <Cards/>,
              },
              {
                path: 'forms',
                element: <Forms/>,
              },
            ],
          },
        ],
      },
      {
        path: 'transactions',
        element: <SidebarLayout/>,
        children: [
          {
            path: 'widget-builder',
            element: <WidgetBuilder/>,
          },
        ],
      },
      {
        path: '*',
        element: <Status404/>,
      },
    ],
  },
];
