import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export const WorkspacePannelSection = ({ children, label, onIconClick}) => {
    const [open, setOpen] = useState(true);

    return (
        <div className='flex flex-col mt-3 px-2'>
            <div className="flex items-center px-3.5 group">
                <Button
                    onClick={() => setOpen(!open)}
                    variant="transparent"
                    className="p-0.5 text-sm size-6 text-[#f9edffcc]"
                >
                    {open ? <FaCaretDown className="size-4" /> : <FaCaretRight className="size-4"/>}
                </Button>
                <Button
                    variant='transparent'
                    size='sm'
                    className='group px-.15 text-[#f9edffcc] h-[30px] flex jusity-center items-center overflow-hidden'
                >
                    <span>{label}</span>
                </Button>

                {onIconClick && (
                    <Button
                        variant='transparent'
                        onClick={onIconClick}
                        size='iconSm'
                        className='ml-auto p-0.5 text-sm size-6 text-[#f9edffcc] hover:bg-[#682748]'
                    >
                        <PlusIcon className='size-4 text-[#f9edffcc]'/>
                    </Button>
                )}
            </div>
            {open && children}
        </div>
    );
};