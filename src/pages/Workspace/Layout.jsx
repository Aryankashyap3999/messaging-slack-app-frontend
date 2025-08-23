import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSideBar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className='h-[100vh]'>
            <div className='h-[calc(100vh)]'>
                <WorkspaceSidebar />
                {children}
            </div>
        </div>
    );
};