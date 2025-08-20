import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignIn } from '@/hooks/apis/auth/useSignin';

import { SigninCard } from './SigninCard';

export const SigninContainer = () => {

    const [validationError, setValidationError] = useState(null);

    const navigate = useNavigate();

    const {isLoading, isSuccess, error, signInMutation} = useSignIn();

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    });

    async function onSigninFormSubmit(e) {
        e.preventDefault();

        if(!signinForm.email || !signinForm.password) {
            console.timeLogg('All fields are required');
            setValidationError({message: 'All fields are required'});
        }

        setValidationError(null);

        await signInMutation({
            email: signinForm.email,
            password: signinForm.password,
        });
    }

    useEffect(() => {
        if(isSuccess) {
            navigate('/home');
        }
    }, [isSuccess, navigate]);

    return (
        <SigninCard 
            signinForm={signinForm} 
            setSigninForm={setSigninForm}
            validationError={validationError} 
            onSigninFormSubmit={onSigninFormSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            error={error}

        />
    );
};