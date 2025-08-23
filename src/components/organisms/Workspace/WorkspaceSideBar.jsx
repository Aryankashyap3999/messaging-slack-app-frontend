import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from 'lucide-react';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { SideBarButton } from '@/components/molecules/SideBarButton/SideBarButton';

import { WorkspaceSwitcher } from './WorkspaceSwitcher';

export const WorkspaceSidebar = () => {
    return (
        <aside
            className='w-[70px] h-full bg-[var(--dark)] flex flex-col gap-y-4 items-center pt-[10px] pb-[5px]'
        >
            <WorkspaceSwitcher />

            <SideBarButton 
                Icon={HomeIcon}
                label='Home'
            />

            <SideBarButton 
                Icon={MessageSquareIcon}
                label='DMs'
            />

            <SideBarButton 
                Icon={BellIcon}
                label='Notifications'
            />

            <SideBarButton 
                Icon={MoreHorizontalIcon}
                label='More'
            />

            <div
                className='flex flex-col items-center justify-center mt-auto gap-y-1 mb-[5vh]'
            >
                <UserButton />
            </div>

        </aside>
    );
};