import { useMutation } from '@tanstack/react-query';

import { deleteWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useDeleteWorkspace = (workspaceId) => {

    const { auth } = useAuth();

    const {isPending, isSuccess, error, mutateAsync: workspaceDeleteMutation} = useMutation({
        mutationFn: () => deleteWorkspaceRequest({ workspaceId, token: auth?.token}),
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
        workspaceDeleteMutation
    };
};



