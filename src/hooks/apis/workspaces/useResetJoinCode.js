import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { resetJoinCodeRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useResetJoinCode = (workspaceId) => {

    const { auth } = useAuth();

    const queryClient = useQueryClient();

    const { isPending, isSuccess, mutateAsync: resetJoinCodeMutation, error} = useMutation({
        mutationFn: () => resetJoinCodeRequest({workspaceId, token: auth?.token}),
        onSuccess: (data) => {
            console.log('Successfully reseted the join code', data);
            queryClient.invalidateQueries(`workspaceId-${workspaceId}`);
            toast.success('Successfully reseted the join code');
        },
        onError: (error) => {
            console.log('Error while resetting the join code', error);
            toast.error('Error while resetting the join code');
        }
    });

    return {
        isPending,
        isSuccess,
        resetJoinCodeMutation,
        error
    };
};