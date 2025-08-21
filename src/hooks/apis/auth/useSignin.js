import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { signInRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';

export const useSignIn = () => {
    const { setAuth } = useAuth();
    const {isSuccess, error, isPending, mutateAsync: signInMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Sign up successfully: ', response?.data);
            toast.success('Succesfully signed In');

            const userObject = JSON.stringify(response?.data);
            console.log('User object is: ', userObject);
            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data?.token);

            setAuth({
                user: response.data,
                token: response.data.token,
                isLoading: false
            });

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

