import CombineContext  from '@/utils/CombineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateaWorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider
);