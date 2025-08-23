import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetWorkspaceById = (id) => {

    const { auth } = useAuth();

    console.log('WorkspaceId is: ', id);
;
    const {isFetching, isSuccess, error, data: workspacesDetail} = useQuery({
        queryKey: [`workspaceId-${id}`],
        queryFn: () => fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspacesDetail
    };
};