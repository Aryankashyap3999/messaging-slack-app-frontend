import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { ressetPassword } from '@/apis/reset';

export const useResetPassword = () => {
    const {isSuccess, isPending, error, mutateAsync: resetPasswordMutate} = useMutation({
        mutationFn: ressetPassword,
        onSuccess: (data) => {
            console.log('Password reset successful', data);
            toast.success('Password reset successful');
        },
        onError: (error) => {
            console.log('Server error', error.message);
            toast.error('Server error');
        }
    });

    return {
        isSuccess,
        isPending,
        error,
        resetPasswordMutate,
    };
};