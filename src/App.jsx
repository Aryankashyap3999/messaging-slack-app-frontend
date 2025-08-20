import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { SigninContainer } from './components/organisms/Auth/SigninContainer';
import { SignupContainer } from './components/organisms/Auth/signupContainer';
import { Toaster } from './components/ui/sonner';
import { Auth } from './pages/Auth/Auth';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { Home } from './pages/Home/Home';
import { Notfound } from './pages/Notfound/Notfound';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {

  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
    <Routes>
      <Route path='/auth/signup'  element={<Auth><SignupContainer/></Auth>} />
      <Route path='/auth/signin'  element={<Auth><SigninContainer/></Auth>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/forget-password' element={<ForgotPassword />} />
      <Route path='/reset-password/:token' element={<ResetPassword/>} />
      <Route path='/*' element={<Notfound/>} />
    </Routes>
    <Toaster richColors  />
    </QueryClientProvider>
  );
}
export default App;
