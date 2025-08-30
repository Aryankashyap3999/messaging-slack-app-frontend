import { cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { cn } from '@/lib/utils';

const userItemVariants = cva(
  'flex items-center justify-start gap- w-full text-sm rounded-lg transition-colors duration-200',
  {
    variants: {
      variant: {
        default:
          'text-[#f9edffcc] hover:bg-white/10 hover:text-white font-normal',
        active:
          'bg-white/90 text-[#481350] hover:bg-white font-semibold shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const UserItem = ({ id, label = 'Member', image, variant }) => {
  const { workspaceIdContext } = useCurrentWorkspace();

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn(userItemVariants({ variant }))}
    >
      <Link to={`/workspace/${workspaceIdContext?._id}/members/${id}`}>
        <Avatar className="h-6 w-6 rounded-md">
          <AvatarImage src={image} />
          <AvatarFallback className="rounded-md bg-sky-500 text-white text-xs">
            {label.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="truncate">{label}</span>
      </Link>
    </Button>
  );
};
