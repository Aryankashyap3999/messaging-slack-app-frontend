import { CopyIcon, RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetJoinCode } from '@/hooks/apis/workspaces/useResetJoinCode';

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId }) => {

    const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

    async function handleCopy () {
        const inviteLink = `${window.location.origin}/join/${joinCode}`;
        await navigator.clipboard.writeText(inviteLink);
        toast.info('Link Copied');
    }

    async function handleResetCode () {
        try {
            await resetJoinCodeMutation();
        } catch (error) {
            console.log('Can not reset join code ',error);
        }
    }

    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite people to { workspaceName }
                    </DialogTitle>
                    <DialogDescription>
                        Use the code shown below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className='flex flex-col items-center jusity-center py-10 gap-y-4 '
                >
                    <p
                        className='font-bold text-4xl uppercase'
                    >
                        {joinCode}
                    </p>
                    <Button
                        size='sm' variant='ghost' onClick= {handleCopy}
                    >
                        Copy Link
                        <CopyIcon className='size-4 ml-2' />
                    </Button>

                </div>

                <div
                    className='flex items-center justify-center w-full '
                >
                    <Button
                        size='sm' variant='outline' onClick={handleResetCode}
                    >
                        Reset Join Code
                        <RefreshCcw className='size-4 ml-2' />
                    </Button>

                </div>
            </DialogContent>
        </Dialog>
    );
};