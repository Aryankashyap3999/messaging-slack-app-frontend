/* eslint-disable react-hooks/rules-of-hooks */
import { LucideLoader2, SearchIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';

export const WorkspaceOptions = () => {

    const { workspaceId } = useParams();

    const { isLoading, workspacesDetail } = useGetWorkspaceById(workspaceId);

    if(isLoading) {
        return <LucideLoader2 className='animate-spin mi-2'/>;
    }

    useEffect(() => {
        console.log('workspace id is: ', workspaceId);
        console.log('Workspace is: ', workspacesDetail);
    }, [workspacesDetail, workspaceId]);



    return (
        <nav
            className='flex items-center justify-center h-10 p-1.5 bg-[#481349]'
        >
            <div>
                <Button
                size='sm'
                    className='bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2'
                >
                    <SearchIcon className='size-5 text-white mr-2'/>
                    <span
                        className='text-white text-xs'
                    >
                        Search {workspacesDetail?.name || 'workspace'}
                    </span>
                </Button>
            </div>
        </nav>
    );
};

// 481349