import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { addMemeberToWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useAddMemberToWorkspace = (workspaceId) => {

    const { auth } = useAuth();

    const { isPending, isSuccess, mutateAsync: addMemberToWorkspaceMutation } = useMutation({
        mutationFn: () => addMemeberToWorkspaceRequest({ workspaceId, token: auth?.token, }),
        onSuccess: (data) => {
            console.log('You have added to workspace successfully', data);
            toast.success('You have added to workspace successfully');
        },
        onError: (error) => {
            console.log('Error while adding member to workspace', error);
            toast.error('You are not added to workspace');
        }
    });

    return {
        isPending,
        isSuccess,
        addMemberToWorkspaceMutation
    };
}; 