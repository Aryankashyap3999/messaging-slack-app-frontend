 
 
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Separator } from '../../ui/separator';

export const SignupCard = ({ 
    signupForm, 
    setSignupForm, 
    validationError, 
    onSignupFormSubmit,
    error,
    isPending,
    isSuccess
}) => {

    const navigate = useNavigate();

    return (

            <Card className='w-full h-full '>
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Sign up to access your account</CardDescription>

                    {validationError && (
                        <div
                            className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-destructive mb-6 '
                        >
                            <TriangleAlert className='size-5' />
                            <p>{validationError.message}</p>
                        </div>
                    )}

                    {error && (
                        <div
                            className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-destructive mb-6 '
                        >
                            <TriangleAlert className='size-5' />
                            <p>{validationError?.message}</p>
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

                    {isPending && (
                        <div>
                            Sending details, wait for sometime
                            <LucideLoader2 className='animate-spin' />
                        </div>
                    )}
                </CardHeader>
                <CardContent>
                    <form className='space-y-4' onSubmit={onSignupFormSubmit}>
                        <Input 
                            placeholder="Email"
                            required
                            onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                            value={signupForm.email}
                            type='email'
                            disabled={false}
                        />
                        <Input 
                            placeholder="password"
                            required
                            onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                            value={signupForm.password}
                            type='password'
                            disabled={isPending}
                        />
                        <Input 
                            placeholder="confirm password"
                            required
                            onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                            value={signupForm.confirmPassword}
                            type='password'
                            disabled={isPending}
                        />
                        <Input 
                            placeholder="username"
                            required
                            onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                            value={signupForm.username}
                            type='text'
                            disabled={isPending}
                        />
                        <Button
                            className="w-full"
                            size='lg'
                            disabled={isPending}
                            type='submit'
                        >
                            Sign Up
                        </Button>

                        <Separator classNmae='my-3'/>
                        <p
                            className='text-s text-muted-forground mt-4'
                        >
                            Already have Account? {'  '}
                            <span 
                                className="text-sky-600 hover:underline cursor-pointer"
                                onClick={() => navigate('/auth/signin')}
                            >
                                Sign In
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>

    );
};