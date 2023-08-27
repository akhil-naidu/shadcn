import { useFormik } from 'formik';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const useForm = (initialData: any) => {
  const initialValuesArray = initialData.map((el: any) => ({
    [el.id]: el.value,
  }));

  const initialDataArray = initialData.map((el: any) => {
    const { id, value, type, fName, placeHolder } = el;

    return {
      [id]: value,
      type,
      fName,
      placeHolder,
    };
  });

  const initialValues = {};
  for (const el of initialValuesArray) {
    Object.assign(initialValues, el);
  }

  const formik: any = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const FInputArray = initialDataArray.map((FInput: any) => {
    const inputName: any = Object.keys(FInput).at(0);

    const firstLetterCapitalInputName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);

    return (
      <div className='space-y-1' key={inputName}>
        <Label htmlFor={inputName}>{firstLetterCapitalInputName}</Label>
        <Input
          id={inputName}
          name={inputName}
          placeholder={FInput.placeHolder}
          type={FInput.type}
          autoComplete='on'
          // onBlur={formik.handleChange}
          // defaultValue={formik.values[inputName]}
          onChange={formik.handleChange}
          value={formik.values[inputName]}
        />
      </div>
    );
  });

  // const FInput = () => {
  //   return (
  //     <div className='space-y-1'>
  //       <Label htmlFor={id}>Name</Label>
  //       <Input
  //         id={id}
  //         placeholder='Enter name'
  //         type='string'
  //         autoComplete='on'
  //         onBlur={formik.handleChange}
  //         defaultValue={formik.values.name}
  //       />
  //     </div>
  //   );
  // };

  return [formik, FInputArray];
};

export default useForm;
