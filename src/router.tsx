import { createBrowserRouter } from 'react-router-dom';

import App from '../src/App';
import RankPage from './pages/rank';
import RecentPage from './pages/recent';
import AccountPage from './pages/account';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AccountPage />,
      },
      {
        path: 'rank',
        element: (
          <ProtectedRoute>
            <RankPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'recent',
        element: (
          <ProtectedRoute>
            <RecentPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
