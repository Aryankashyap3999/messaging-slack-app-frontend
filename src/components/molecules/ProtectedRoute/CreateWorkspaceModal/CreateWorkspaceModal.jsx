import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspace } from '@/hooks/apis/workspaces/useCreateWorkspaces';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreaateWorkspaceModal';

export const CreateWorkspaceModal = () => {

    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const {isPending, createWorkspaceMutation} = useCreateWorkspace();

    const [workspaceName, setWorkspaceName] = useState();

    const navigate = useNavigate();

    function handleClose () {
        setOpenCreateWorkspaceModal(false);
    }

    async function handleFormSubmit (e) {
        try {
            e.preventDefault();
            const response = await createWorkspaceMutation({name: workspaceName});
            setOpenCreateWorkspaceModal(false);
            console.log('Workspace is created ', response);
            navigate(`workspace/${response._id}`);
        } catch (error) {
            console.log('workspace is not created', error);
        }
    } 

    return (
        <Dialog
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new workspace
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={(e) =>handleFormSubmit(e)}>
                    <Input 
                        required
                        disabled={isPending}
                        minLength={3}
                        placeholder='Enter the workspace name eg. DevWorkspace'
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                    />

                    <div>
                        <Button
                            className='flex justify-center mt-5'
                            disabled={isPending}
                        >
                            Create Workspace
                        </Button>
                    </div>
                </form>

            </DialogContent>

        </Dialog>
    );

};