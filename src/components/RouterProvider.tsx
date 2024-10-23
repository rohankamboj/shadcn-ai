import Dashboard from '@/pages/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageRoutes from '@/routes/PageRoutes';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Layout from './Layout';
import ProtectedRoute from './auth/ProtectedRoute';
import PublicRoute from './auth/PublicRoute';
import Settings from '@/pages/settings';

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={PageRoutes.login} element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={PageRoutes.home} element={<Home />} />
            <Route path={PageRoutes.dashboard} element={<Dashboard />} />
            <Route path={PageRoutes.settings} element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
