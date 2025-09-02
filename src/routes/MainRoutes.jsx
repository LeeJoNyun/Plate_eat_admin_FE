import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

const Reservation = Loadable(lazy(() => import('pages/platEat/reservation/Reservation')));
const User = Loadable(lazy(() => import('pages/platEat/user/User')));
const UserDetail = Loadable(lazy(() => import('pages/platEat/user/UserDetail')));
const Video = Loadable(lazy(() => import('pages/platEat/video/Video')));
const VideoRegister = Loadable(lazy(() => import('pages/platEat/video/VideoRegister')));
const VideoDetail = Loadable(lazy(() => import('pages/platEat/video/VideoDetail')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'platEat',
      children: [
        {
          path: 'video',
          element: <Video />
        },
        {
          path: 'videoRegister',
          element: <VideoRegister />
        },
        {
          path: 'videoDetail/:id',
          element: <VideoDetail />
        },
        {
          path: 'user',
          element: <User />
        },
        {
          path: 'userDetail',
          element: <UserDetail />
        },
        {
          path: 'reservation',
          element: <Reservation />
        }
      ]
    }
  ]
};

export default MainRoutes;
