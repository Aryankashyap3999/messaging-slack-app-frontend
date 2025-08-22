import { useContext } from 'react';

import CreateWorkspaceContext from '@/context/CreateaWorkspaceContext';

export const useCreateWorkspaceModal = () => {
    return useContext(CreateWorkspaceContext);
};