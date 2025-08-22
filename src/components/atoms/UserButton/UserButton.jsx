
import { LogOutIcon, PencilIcon, Settings, Settings2Icon } from 'lucide-react';
import { toast } from 'sonner';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreaateWorkspaceModal';

export const UserButton = () => {
    const { auth, logout } = useAuth();
    console.log('User is: ', auth?.user);

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    function handleClick () {
        setOpenCreateWorkspaceModal(true);
    }

    async function handleLogout () {
        await logout();
        toast.success('Successfully logout');
    }

    return (
        <DropdownMenu className='outline-none relative'>
            <DropdownMenuTrigger>
                <Avatar className='size-10 hover:opacity-65 transition'>
                    <AvatarImage src={auth?.user?.avatar}/>
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={handleClick}>
                    <PencilIcon className='size-4 mr-2 h-10'/>
                    Create Wprkspace
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className='size-4 mr-2 h-10'/>
                    Setting
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon className='size-4 mr-2 h-10'/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};