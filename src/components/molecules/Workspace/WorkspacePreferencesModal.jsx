import { useQueryClient } from '@tanstack/react-query';
import { Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';
import { useUpdateWorkspace } from '@/hooks/apis/workspaces/useUpdateWorkspace';
import { useWorkspacePreferncesModel } from '@/hooks/context/useWorkspacePreferencesModal';

export const WorkspacePreferencesModal = () => {

    const queryClient = useQueryClient(); 
    const {intialValue, openPreferences, setOpenPreferences, workspace} = useWorkspacePreferncesModel();

    const [newWorkspace, setNewWorkspace] = useState({
        name: workspace?.name
    });


    const [workspaceId, setWorkspaceId] = useState();

    const [editOpen, setEditOpen] = useState(false);


    const navigate = useNavigate();

    console.log('Workspace id is ', workspaceId);

    const {workspaceUpdateMutation, isPending} = useUpdateWorkspace(workspaceId);

    const { workspaceDeleteMutation } = useDeleteWorkspace(workspaceId);

      const { workspacesDetail } = useGetWorkspaceById(workspaceId);

    async function handleFormSubmit(e) {
        try {
            e.preventDefault();

            console.log('Signup form submitted ', newWorkspace);
            setEditOpen(false);
            setNewWorkspace({name: ''});
            setOpenPreferences(false);

            await workspaceUpdateMutation(newWorkspace.name);
            queryClient.invalidateQueries('workspaces');                    

            await workspacesDetail(workspaceId);

        } catch (error) {
            console.log('Can not update the workspace', error);
        }
    }

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
                    
                    <Dialog open={editOpen} onOpenChange={setEditOpen} asChild>
                        <DialogTrigger>
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
                        </DialogTrigger>
                        <DialogContent >
                            <DialogHeader>
                                <DialogTitle >
                                    
                                    <form className='space-y-4 m-4' onSubmit={handleFormSubmit}>
                                        <Input
                                            placeholder='Enter new name'
                                            onChange={(e) => setNewWorkspace({name: e.target.value})}
                                            required
                                            value={newWorkspace.name}
                                            disabled={isPending}
                                            type='text'
                                        />

                                        <DialogFooter className='flex' >
                                        <div>
                                            <DialogClose>
                                                <Button
                                                    variant='destructive'
                                                    disabled={isPending}
                                                    size='lg'
                                                >
                                                    Cancel
                                                </Button>
                                                
                                            </DialogClose>
                                        </div>
                                        <div>
                                            <Button
                                                className="w-full"
                                                variant='default'
                                                disabled={isPending}
                                                type='submit'
                                                minLen={3}
                                                maxLength={50}
                                                autoFocus
                                                size='lg'
                                            >
                                                Save
                                            </Button>
                                        
                                        </div>
                                            
                                    </DialogFooter>

                                        
                                    </form>

                                    

                                </DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

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