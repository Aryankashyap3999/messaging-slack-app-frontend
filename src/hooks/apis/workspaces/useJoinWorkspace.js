import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { joinWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';



export const useJoinWorkspace = ( workspaceId ) => {

    const { auth } = useAuth();

    const { isPending, isSuccess, mutateAsync: joinWorkspaceMutation } = useMutation({
        mutationFn: ({joinCode}) => {
            console.log('Details are: ', workspaceId, joinCode);
            joinWorkspaceRequest({ workspaceId, joinCode, token: auth?.token});

        },
        onSuccess: async (data) => {
            console.log('Successfully joined the workspace', data);
            toast.success('You have been added to workspace');
        },
        onError: (error) => {
            console.log('Error while adding to worksoace', error);
            toast.error('You have not been added to workspace');
        }
    });

    return {
        isPending,
        isSuccess,
        joinWorkspaceMutation
    };
};