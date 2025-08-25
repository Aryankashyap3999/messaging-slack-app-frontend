import { useMutation } from '@tanstack/react-query';

import { updateWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useDeleteWorkspace = (workspaceId) => {

    const { auth } = useAuth();

    const {isPending, isSuccess, error, mutateAsync: workspaceUpdateMutation} = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token: auth?.token}),
        onSuccess: (data) => {
            console.log('Successfully deleted workspace', data);
        },
        onError: (error) => {
            console.logg('Error while deleting workspace', error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        workspaceUpdateMutation
    };
};