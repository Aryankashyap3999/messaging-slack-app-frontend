import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/apis/auth';

export const useSignUp = () => {
    const {isSuccess, error, isPending, mutateAsync: signUpMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Sign up successfully: ', data);
        },
        onError: (error) => {
            console.log('Failed to signup ', error);
        }
    });

    return {
        isSuccess,
        isPending,
        error,
        signUpMutation
    };
};

