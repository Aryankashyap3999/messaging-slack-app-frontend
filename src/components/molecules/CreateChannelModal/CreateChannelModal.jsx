import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const CreateChannelModal = () => {
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [ channelName, setChannelName ] = useState();

    function handleFormSubmit (e) {
        e.preventDefault();


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
                        minLen={3}
                        maxLen={15}
                        type='text'
                    />

                    <div className='flex justify-end mt-4'>
                        <Button
                            type='submit'
                            variant='primary'
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