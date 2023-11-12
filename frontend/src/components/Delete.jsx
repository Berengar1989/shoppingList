import React, { useState } from 'react';
import BackButton from './BackButton';
import { useSnackbar } from 'notistack';

const Delete = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    props.onSave(props.item);
    enqueueSnackbar('Item deleted successfully', { variant: 'success' });
  };
  
  return (
    <div className='p-4'>
      <BackButton onReturn={props.onReturn} />
      <h1 className='text-3xl my-4'>Delete item</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this item?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default Delete;
