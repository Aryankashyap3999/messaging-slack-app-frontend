import CombineContext  from '@/utils/CombineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateaWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';

export const AppContextProvider = CombineContext(
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider,
    CreateChannelContextProvider
);