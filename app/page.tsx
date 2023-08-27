'use client';

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import useForm from '@/lib/hooks/useForm';

const DialogButton = () => {
  const initialData = [
    {
      id: 'name',
      value: '',
      type: 'text',
      fName: 'FInputName',
      placeHolder: 'enter Your Name',
    },
    {
      id: 'age',
      value: '',
      type: 'number',
      fName: 'FInputAge',
      placeHolder: 'enter Your age',
    },
  ];

  const [formik, [FInputName, FInputAge]] = useForm(initialData);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className='md: min-w-[800px]'>
        <form onSubmit={(e) => handleSubmit(e)} id='test-form'>
          <DialogHeader>
            <DialogTitle>Test</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue='basic'>
            <div className='grid gap-4'>
              <div className='flex justify-between mt-4'>
                <div>
                  <Label>Add New Text Field </Label>
                  <DialogDescription>
                    Small or long text like or description
                  </DialogDescription>
                </div>
                <div>
                  <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='basic'>Basic Settings</TabsTrigger>
                    <TabsTrigger value='advanced'>
                      Advanced Settings
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value='basic' className='space-y-6'>
                <div className='space-y-1'>
                  {FInputName}

                  <DialogDescription>
                    No space is allowed for the name or attribute
                  </DialogDescription>
                </div>

                <div className='space-y-1'>
                  {FInputAge}

                  <DialogDescription>
                    No strings are allowed for the age
                  </DialogDescription>
                </div>

                <div className='space-y-1'>
                  <RadioGroup className='space-y-3' defaultValue='short-text'>
                    <div className='space-y-1'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='short-text' id='r1' />
                        <Label htmlFor='r1'>Short Text</Label>
                      </div>
                      <DialogDescription>
                        Best for titles, names, links(URL). It also enables
                        exact search on field
                      </DialogDescription>
                    </div>

                    <div className='space-y-1'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='long-text' id='r2' />
                        <Label htmlFor='r2'>Long Text</Label>
                      </div>
                      <DialogDescription>
                        Best for description, biography, Exact search is
                        disabled.
                      </DialogDescription>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>
              <TabsContent value='advanced'>working</TabsContent>
            </div>
          </Tabs>

          <DialogFooter>
            <Button variant='outline'>Cancel</Button>
            <Button variant='outline'>
              <Plus className='mr-2 h-4 w-4' />
              Add Another Field
            </Button>
            <Button type='submit'>Finish</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogButton;
