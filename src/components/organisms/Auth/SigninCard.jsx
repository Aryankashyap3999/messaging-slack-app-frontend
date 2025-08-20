 
import { Separator } from '@radix-ui/react-separator';
import { LucideLoader2, TriangleAlert, TriangleAlertIcon } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const SigninCard = ({
    signinForm, 
    setSigninForm,
    validationError, 
    onSigninFormSubmit,
    isLoading, 
    isSuccess, 
    error
}) => {

    const navigate = useNavigate();


    return (
        <Card className='w-full h-full '>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to access your account</CardDescription>
                {validationError && (
                    <div className='bg-destructive/15 rounded-md mb-2 text-destructive flex items-center justify-center gap-x-2 h-[70px]'>
                        <TriangleAlert className='size-5' />
                        <p >{validationError?.message}</p>
                    </div>
                )}
                {isLoading && (
                    <div
                        className='bg-amber-100 flex flex-row gap-x-3 items-center justify-center h-[50px]'
                    >
                        <LucideLoader2 className='size-4 animate-spin' />
                        <p>Loading...</p>
                    </div>
                )}
                {isSuccess && (
                    <div 
                        className='bg-green-100 py-2 px-2'
                    >
                        <div className='flex gap-x-2 justify-between'>
                            <FaCheck className='size-5'/>
                            <div> Congratuations, succesfully signed In. </div>
                            <LucideLoader2 className='animate-spin' />
                        </div>
                        
                    </div>
                )}
                {error && (
                    <div
                        className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-destructive mb-6 '
                    >
                        <TriangleAlertIcon className='size-5' />
                        <p>{error?.message}</p>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <form className='space-y-4' onSubmit={onSigninFormSubmit}>
                    <Input
                        placeholder='email'
                        required
                        onChange={(e) => setSigninForm({...signinForm, email: e.target.value})}
                        type='email'
                        disabled={false}
                    />
                    <Input
                        placeholder='password'
                        required
                        onChange={(e) => setSigninForm({...signinForm, password: e.target.value})}
                        type='password'
                        disabled={false}
                    />
                    <Button
                        className='w-full '
                        size='lg'
                        disabled={false}
                        type='submit'
                    >
                    Sign In
                </Button>

                </form>
                
                <Separator className='my-3' />
                <p>
                    If don't have account? {' '}
                    <span 
                        className='text-sky-600 hover:underlined cursor-pointer'
                        onClick={() => navigate('/auth/signup')}
                    >
                        Sign Up
                    </span>
                </p>
            </CardContent>
        </Card>
    );
};