import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Modals } from './components/organisms/Modals/Modals';
import { Toaster } from './components/ui/sonner';
import { AppContextProvider } from './context/AppContextProvider';
import { Router } from './Router';


function App() {

  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
      <AppContextProvider>
        <Router/>
        <Modals/>
      </AppContextProvider>
        <Toaster richColors  />
    </QueryClientProvider>
  );
}
export default App;
