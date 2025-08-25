import { useContext } from 'react';

import WorkspacePreferenceModalContext from '@/context/WorkspacePreferenceModalContext';

export const useWorkspacePreferncesModel = () => {
    return useContext(WorkspacePreferenceModalContext);
}; 