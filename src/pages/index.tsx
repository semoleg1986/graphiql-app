import { Route, Routes } from 'react-router-dom';
import {
  ABOUT_PAGE,
  LOGIN_PAGE,
  MAIN_PAGE,
  NOT_FOUND_PAGE,
  REGISTER_PAGE,
  ROOT_PAGE,
} from '../utils/constants';
import { Suspense, lazy } from 'react';
import GraphiQL from '../components/Converter/Graphql';
import ResetPassword from './Main/ResetPage';

const WelcomePage = lazy(() => import('../pages/Main/WelcomePage'));
const MainPage = lazy(() => import('../pages/Main/MainPage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const LoginPage = lazy(() => import('../pages/Main/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Main/RegisterPage'));

const notFound = 404;
const preload = <div>Загрузка...</div>;

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROOT_PAGE}
        element={
          <Suspense fallback={preload}>
            <WelcomePage />
          </Suspense>
        }
      />
      <Route
        path={MAIN_PAGE}
        element={
          <Suspense fallback={preload}>
            <MainPage />
          </Suspense>
        }
      >
        <Route index element={<GraphiQL />} />
      </Route>
      <Route
        path={LOGIN_PAGE}
        element={
          <Suspense fallback={preload}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path={REGISTER_PAGE}
        element={
          <Suspense fallback={preload}>
            <RegisterPage />
          </Suspense>
        }
      />
      <Route
        path={ABOUT_PAGE}
        element={
          <Suspense fallback={preload}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="reset-password"
        element={
          <Suspense fallback={preload}>
            <ResetPassword />
          </Suspense>
        }
      />
      <Route path={NOT_FOUND_PAGE} element={notFound} />
    </Routes>
  );
};
