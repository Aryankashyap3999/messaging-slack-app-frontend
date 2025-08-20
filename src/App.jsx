import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { SigninCard } from './components/organisms/Auth/SigninCard';
import { SignupContainer } from './components/organisms/Auth/signupContainer';
import { Auth } from './pages/Auth/Auth';
import { Notfound } from './pages/Notfound/Notfound';

function App() {

  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
    <Routes>
      <Route path='/auth/signup'  element={<Auth><SignupContainer/></Auth>} />
      <Route path='/auth/signin'  element={<Auth><SigninCard/></Auth>} />
      <Route path='/*' element={<Notfound/>} />
    </Routes>
    </QueryClientProvider>
  );
}
export default App;
