import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';
import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSideBar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className='h-[100vh]'>
            <WorkspaceNavbar />
            <div className='h-[calc(100vh-40px)]'>
                <WorkspaceSidebar />
                {children}
            </div>
        </div>
    );
};