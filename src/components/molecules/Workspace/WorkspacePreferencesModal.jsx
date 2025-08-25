import { useQueryClient } from '@tanstack/react-query';
import { Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useWorkspacePreferncesModel } from '@/hooks/context/useWorkspacePreferencesModal';

export const WorkspacePreferencesModal = () => {

    const queryClient = useQueryClient(); 

    const {intialValue, openPreferences, setOpenPreferences, workspace} = useWorkspacePreferncesModel();

    const [workspaceId, setWorkspaceId] = useState();

    const navigate = useNavigate();

    console.log('Workspace id is ', workspaceId);

    const { workspaceDeleteMutation } = useDeleteWorkspace(workspaceId);
 
    async function handleDelete () {
        try {
            await workspaceDeleteMutation();
            queryClient.invalidateQueries('workspaces');
            navigate('/home');
            setOpenPreferences(false);
            toast.success('Worspace deleted successfully');
        } catch (error) {
            console.log('Workspace did not deleted ', error);
            toast.error('Did not able to delete workspace');
        }
    } 

    useEffect(() => {
        setWorkspaceId(workspace?._id);
    },[workspace]);

    return (
        <Dialog open={openPreferences} onOpenChange={setOpenPreferences} asChild>
            <DialogContent className='p-0 bg-gray-50 overflow-hidden' >
                <DialogHeader className='p-4 border-b bg-white'>
                    <DialogTitle>
                        {intialValue} Edit Workspace
                    </DialogTitle>
                </DialogHeader>

                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    
                    <div
                        className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >
                        <div
                            className='flex items-center justify-between '
                        >
                            <p
                                className='font-semibold text-sm'
                            >
                                Workspace Name
                            </p>
                            <p
                                className='text-sm font-semibold hover:underline'
                            >
                                Edit 
                            </p>
                        </div>

                        <p
                            className='text-sm'
                        >
                            {intialValue}
                        </p>

                    </div>

                     <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                        onClick={handleDelete}
                     >
                        <Trash2Icon className='size-5'/>
                        <p
                            className='text-sm font-semibold'
                        >
                            Delete Workspace
                        </p>
                    </button>
                
                </div>
            </DialogContent>
        </Dialog>
    );
};