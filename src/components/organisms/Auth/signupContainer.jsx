import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignUp } from '@/hooks/apis/auth/useSignup';

import { SignupCard } from './SignupCard';

export const SignupContainer = () => {

    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
            email: '',
            password: '',
            confirmPassword: '',
            username: ''
    });

    const [validationError, setValidationError] = useState(null);

    const {isSuccess, isPending, error, signUpMutation} = useSignUp();

    async function onSignupFormSubmit(e) {
        e.preventDefault();

        console.log('Signup form submitted ', signupForm);

        if(!signupForm.email || !signupForm.password || !signupForm.username) {
            console.log('All fields are required');
            setValidationError({message: 'All fields are required'});
            return;
        }

        if(signupForm.password !== signupForm.confirmPassword) {
            console.log('Password not matched');
            setValidationError({message: 'Password not matched'});
            return;
        }

        setValidationError(null);

        await signUpMutation({
            email: signupForm.email,
            password: signupForm.password,
            username: signupForm.username
        });


    }

    useEffect(() => {
        if(isSuccess) {
            navigate('/auth/signin');
        }
        
    }, [navigate, isSuccess]);

    return (
        <SignupCard 
            signupForm={signupForm}  
            setSignupForm={setSignupForm} 
            onSignupFormSubmit={onSignupFormSubmit} 
            validationError={validationError}
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
        />
    );

};