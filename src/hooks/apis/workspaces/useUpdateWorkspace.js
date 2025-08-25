import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { updateWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useUpdateWorkspace = (workspaceId) => {

    const { auth } = useAuth();

    const {isPending, isSuccess, error, mutateAsync: workspaceUpdateMutation} = useMutation({
        mutationFn: (name) => updateWorkspaceRequest({ workspaceId, name, token: auth?.token}),
        onSuccess: (data) => {
            console.log('Successfully deleted workspace', data);
            toast.success('Successfully updated workspace name');
        },
        onError: (error) => {
            console.logg('Error while deleting workspace', error);
            toast.error('Can not updated workspace name');
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        workspaceUpdateMutation
    };
};