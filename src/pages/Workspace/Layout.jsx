import { WorkspaceOptions } from '@/components/organisms/Workspace/WorkspaceOptions';
import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSideBar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className='h-[100vh]'>
            <WorkspaceOptions />
            <div className='h-[calc(100vh-40px)]'>
                <WorkspaceSidebar />
                {children}
            </div>
        </div>
    );
};