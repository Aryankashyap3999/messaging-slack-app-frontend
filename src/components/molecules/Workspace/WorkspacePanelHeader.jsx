import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useWorkspacePreferncesModel } from '@/hooks/context/useWorkspacePreferencesModal';

export const WorkspacePanelHeader = ({ workspace }) => {

    const workspacemembers = workspace?.members;

    console.log('Workspace is: ', workspace);

    const { auth } = useAuth();

    console.log('Auth is: ', auth);

    const isLoggedInUserAdminofWorkspace = workspacemembers?.find(member => member.memberId._id === auth?.user?._id && member.role === 'admin');

    console.log('Is admin: ', isLoggedInUserAdminofWorkspace);

    const { setOpenPreferences, setIntialvalue } = useWorkspacePreferncesModel();

    return (
        <div
            className='flex items-center justify-between px-4 h-[50px] gap-0.5'
        >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='transparent'
                        className='font-semibold text-lg w-auto p-1.5 overflow-hidden'
                    >
                        <span className='truncate'>
                            {workspace?.name}
                        </span>
                        <ChevronDownIcon className='size-5 ml-1 ' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' align='start' className='w-64'>
                    <DropdownMenuItem>
                        <div
                            className='size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center bg-[#616061]'
                        >
                            {workspace?.name.charAt(0).toUpperCase()}
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='font-bold'> 
                                {workspace?.name}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                                (Active workspace)
                            </p>
                        </div>
                    </DropdownMenuItem>

                    {isLoggedInUserAdminofWorkspace && (
                        <>
                            <DropdownMenuItem 
                                className='cursor-pointer py-2'
                                onClick={() => {
                                        setIntialvalue(workspace?.name);
                                        setOpenPreferences(true);
                                    }
                                }
                            >
                                Prefernces
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='cursor-pointer py-2'>
                                Invite people to {workspace?.name}
                            </DropdownMenuItem>
                        </>
                    )}

                </DropdownMenuContent>
            </DropdownMenu>

            <div
                className='flex items-center gap-0.5'
            >
                <Button
                    variant='transparent'
                    className='text-white'
                    size='iconSm'
                >
                    <ListFilterIcon className='size-5 ' />

                </Button>
                <Button
                    variant='transparent'
                    className='text-white'
                    size='iconSm'
                >
                    <SquarePenIcon className='size-5 ' />

                </Button>
            </div>
        </div>
    );
};