import { SigninCard } from '@/components/organisms/Auth/SigninCard';
import { SignupCard } from '@/components/organisms/Auth/SignupCard';

export const Auth = ({ children }) => {
    return (
        <div
            className="h-[100vh] flex items-center justify-center bg-[var(--slack)]"

        >
            <div
                className="md:h-auto md:w-[420px]"
            >
               {children}
            </div>

            
        </div>
    );
};