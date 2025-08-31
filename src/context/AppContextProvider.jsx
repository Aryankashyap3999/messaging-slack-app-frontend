import CombineContext  from '@/utils/CombineContext';

import { AuthContextProvider } from './AuthContext';
import { ChannelMessagesProvider } from './CHannelMessages';
import { CreateWorkspaceContextProvider } from './CreateaWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { SocketContextProvider } from './SocketContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePreferenceModalContextProvider } from './WorkspacePreferenceModalContext';

export const AppContextProvider = CombineContext(
    ChannelMessagesProvider,
    SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferenceModalContextProvider,
    CreateChannelContextProvider
);