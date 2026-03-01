import { createBrowserRouter } from 'react-router-dom';

import App from '../src/App';
import RankPage from './pages/rank';
import RecentPage from './pages/recent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <RankPage />,
      },
      {
        path: 'recent',
        element: <RecentPage />,
      },
    ],
  },
]);

export default router;
