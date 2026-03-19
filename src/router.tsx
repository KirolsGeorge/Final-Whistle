import { createBrowserRouter } from 'react-router-dom';

import App from '../src/App';
import RankPage from './pages/rank';
import RecentPage from './pages/recent';
import AccountPage from './pages/account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'rank',
        element: <RankPage />,
      },
      {
        path: 'recent',
        element: <RecentPage />,
      },
      {
        path: '',
        element: <AccountPage />,
      },
    ],
  },
]);

export default router;
