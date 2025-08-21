import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceRequest } from '@/apis/workspaces';

export const useFetchWorkspace = () => {
    const {isFetching, isSuccess, error, data: workspaces} = useQuery({
        queryFn: fetchWorkspaceRequest,
        queryKey: ['workspaces'],
        staleTime: 30000,
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspaces
    };
};