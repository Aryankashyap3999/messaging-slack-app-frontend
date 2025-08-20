import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { signInRequest } from '@/apis/auth';

export const useSignIn = () => {
    const {isSuccess, error, isPending, mutateAsync: signInMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log('Sign up successfully: ', data);
            toast.success('Succesfully signed In');
        },
        onError: (error) => {
            console.log('Failed to signup ', error);
            toast.error('Error, signup fail');
        }
    });

    return {
        isSuccess,
        isPending,
        error,
        signInMutation
    };
};

