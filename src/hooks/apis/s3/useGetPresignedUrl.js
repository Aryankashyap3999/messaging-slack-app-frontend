import { useQuery } from '@tanstack/react-query';

import { getPreginedUrl } from '@/apis/s3';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetPresignedUrl = () => {
    const { auth } = useAuth;
    const { isPending, isSuccess, data: url, error} = useQuery({
        queryKey: ['getPresignedUrl'],
        queryFn: () => getPreginedUrl({token: auth?.token}),
        staleTime: 30000,
    });

    return {
        isPending,
        isSuccess,
        error,
        url
    };
};