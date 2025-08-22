import CombineContext  from '@/utils/CombineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateaWorkspaceContext';

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
);