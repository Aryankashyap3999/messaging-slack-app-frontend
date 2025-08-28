import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { addChannelToWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useAddChannelToWorkspace = () => {

    const { auth } = useAuth();

    const { isPending, isSuccess, mutateAsync: addChannelToWorkspaceMutation } = useMutation({
        mutationFn: ({workspaceId, channelName}) => addChannelToWorkspaceRequest({ workspaceId, channelName, token: auth?.token }),
        onSuccess: (data) => {
            console.log('Successfully added channel to workspace', data);
            toast.success('Successfully added channel to workspace');
        },
        onError: (error) => {
            console.log('Error while adding channel to workspace', error);
            toast.error('Error while adding channel to workspace');
        }
    });

    return {
        isPending,
        isSuccess,
        addChannelToWorkspaceMutation
    };
}; 