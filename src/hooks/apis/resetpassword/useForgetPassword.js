import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { forgetPassword } from '@/apis/reset';

export const useForgetPassword = () => {
    const {isSuccess, isPending, error, mutateAsync: forgetPasswordMutate} = useMutation({
        mutationFn: forgetPassword,
        onSuccess: (data) => {
            console.log('Reset link sent to your email', data);
            toast.success('Reset link sent to your email');
        },
        onError: (error) => {
            console.log('Failed to sent email ', error.message);
            toast.error('Failed to sent email');
        }
    });

    return {
        isSuccess,
        isPending,
        error,
        forgetPasswordMutate
    };
};