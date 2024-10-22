import Dashboard from '@/pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageRoutes from '@/routes/PageRoutes';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Layout from './Layout';
import ProtectedRoute from './auth/ProtectedRoute';
import PublicRoute from './auth/PublicRoute';

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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
