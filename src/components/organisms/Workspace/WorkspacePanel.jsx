import { AlertTriangleIcon, HashIcon, Loader, MessageSquareIcon, MessageSquareTextIcon, SendHorizontalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SideBarItem } from '@/components/atoms/SideBarItem/SideBarItem';
import { WorkspacePannelSection } from '@/components/molecules/Workspace/WorkspacePannelSection';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

import { WorkspacePanelHeader } from '../../molecules/Workspace/WorkspacePanelHeader';

export const WorkspacePanel = () => {

    const { workspaceId } = useParams();

    const { setOpenCreateChannelModal} = useCreateChannelModal();

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

            <div
                className='flex flex-col px-2 mt-3'
            >
                <SideBarItem 
                    label='Threads'
                    icon={MessageSquareTextIcon}
                    id='threads'
                    variant='active'
                />

                <SideBarItem 
                    label='Drafts & Sends'
                    icon={SendHorizontalIcon}
                    id='drafts'
                    variant='transparent'
                />
            </div>

            <WorkspacePannelSection
                label="channels"
                onIconClick={() => setOpenCreateChannelModal(true)}
            >
                {workspacesDetail?.channels?.map((channel) => {
                    return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />;
                })}
            </WorkspacePannelSection>
        </div>
    );
};