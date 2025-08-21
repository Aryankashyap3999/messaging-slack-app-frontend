import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from './components/ui/sonner';
import { AppContextProvider } from './context/AppContextProvider';
import { Router } from './Router';


function App() {

  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>
      <AppContextProvider>
        <Router/>
        <Toaster richColors  />
      </AppContextProvider>
    </QueryClientProvider>
  );
}
export default App;
