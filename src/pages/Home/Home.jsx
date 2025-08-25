import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreaateWorkspaceModal';

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspace();

    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const navigate = useNavigate();

    useEffect(() => {

        if(isFetching) return;

        console.log('Workspaces download is: ', workspaces);

        if (workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, create one');
            setOpenCreateWorkspaceModal(true);
            console.log('openCreateWorkspaceModal is ', openCreateWorkspaceModal);
        } else {
            navigate(`/workspace/${workspaces[0]._id}`);
        }

    }, [isFetching, workspaces, navigate, setOpenCreateWorkspaceModal, openCreateWorkspaceModal]);

    return (
        <div>
            <h1>Home</h1>
            <UserButton />
        </div>
    );
};