import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { SigninContainer } from './components/organisms/Auth/SigninContainer';
import { SignupContainer } from './components/organisms/Auth/signupContainer';
import { Auth } from './pages/Auth/Auth';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { Home } from './pages/Home/Home';
import { Notfound } from './pages/Notfound/Notfound';
import ResetPassword from './pages/ResetPassword/ResetPassword';

export const Router = () => {
    return (
        <Routes>
          <Route path='/auth/signup'  element={<Auth><SignupContainer/></Auth>} />
          <Route path='/auth/signin'  element={<Auth><SigninContainer/></Auth>} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/forget-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword/>} />
          <Route path='/*' element={<Notfound/>} />
        </Routes>
    );
};