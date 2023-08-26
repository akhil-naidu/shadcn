import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DialogButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Test</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription> */}
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid gap-4'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' value='Pedro Duarte' />
          </div>
          <div className='grid gap-4'>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' value='@peduarte' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogButton;
