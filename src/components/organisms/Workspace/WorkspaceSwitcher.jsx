import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Loader } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';

export const WorkspaceSwitcher = () => {
  
    const navigate = useNavigate();

    const { workspaceId } = useParams();

    const { isFetching, workspacesDetail } = useGetWorkspaceById(workspaceId);

    const {isFetching: isFetchingWorkspace, workspaces } = useFetchWorkspace();

    function handleWorkspaceClick (id) {
        navigate(`/workspace/${id}`);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className='size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 tsxt-xl'
                >
                    {isFetching ? <Loader className='size-5 animate-spin'/> : workspacesDetail?.name[0].toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    className='cursor-pointer flex flex-col justify-start items-start'
                >
                    {workspacesDetail?.name}
                    <span
                        className='text-xs text-muted-foreground'
                    >
                        (Active Workspace)
                    </span>
                </DropdownMenuItem>

                    {isFetchingWorkspace ? <Loader className='sizze-5 animate-spine' /> :
                        (workspaces?.filter((workspace) => workspace._id !== workspaceId)?.map((workspace) => (
                            <DropdownMenuItem
                                key={workspace._id}
                                className='cursor-pointer flex flex-col justify-start items-start'
                                onClick={() => handleWorkspaceClick(workspace._id)}
                            >
                                <p
                                    className='truncate'
                                >
                                    {workspace?.name}
                                </p>
                            </DropdownMenuItem> 
                        )))
                    }
            </DropdownMenuContent>
        </DropdownMenu>
    );



};