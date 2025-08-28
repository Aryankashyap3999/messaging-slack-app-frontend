import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAddChannelToWorkspace } from '@/hooks/apis/workspaces/useAddChannelToWorkspace';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';

export const CreateChannelModal = () => {

    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace();

    const { workspaceIdContext } = useCurrentWorkspace();

    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [ channelName, setChannelName ] = useState();

    async function handleFormSubmit (e) {
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId: workspaceIdContext,
            channelName
        });
        setOpenCreateChannelModal(false);

    }

    return (
        <Dialog open={openCreateChannelModal} onOpenChange={() => setOpenCreateChannelModal(false)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create Channel
                    </DialogTitle>
                </DialogHeader>
                <form className='space-y-4 m-4' onSubmit={handleFormSubmit}>
                    <Input 
                        placeholder='Enter the channel name'
                        required
                        onChange={(e) => setChannelName(e.target.value)}
                        value={channelName}
                        disabled={false}
                        minLength={3}
                        maxLength={15}
                        type='text'
                    />

                    <div className='flex justify-end mt-4'>
                        <Button
                            type='submit'
                            variant='default'
                            size='lg'
                        >
                            Create
                        </Button>
                    </div>

                   
                </form>
            </DialogContent>
        </Dialog>
    );
};