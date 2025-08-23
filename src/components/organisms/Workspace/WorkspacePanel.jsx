import { AlertTriangleIcon, Loader } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';

import { WorkspacePanelHeader } from './WorkspacePanelHeader';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();

    const { isFetching, workspacesDetail, isSuccess } = useGetWorkspaceById(workspaceId);

    if(isFetching) {
        return (
            <div>
                <Loader className='animate-spin size-6' />
            </div>
        );
    }

    if(!isSuccess) {
        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <AlertTriangleIcon className='size-6 text-white' />
            </div>
        );
    }

    return (
        <div
            className='flex flex-col h-full bg-slack-medium'
        >
            <WorkspacePanelHeader workspace={workspacesDetail}/>
        </div>
    );
};