import React, { useState } from 'react';
import InputLabel from './InputLabel';
import { EDIT_AUTHOR_BIRTH_YEAR } from '../queries';
import { useMutation } from '@apollo/client';


const BirthYearForm = () => {
  const [name, setName] = useState('');
  const [born, setBorn] = useState('');
  const [changeBorn ] = useMutation(EDIT_AUTHOR_BIRTH_YEAR);
  const onSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();

    changeBorn({
      variables: {
        name,
        setBornTo: born
      }
    });

    setBorn('');
    setName('');

  };
  return (
    <div>

      <h3>Set Birth Year</h3>

      <form onSubmit={onSubmit} >

        <InputLabel placeholder='Enter Name' name='name' labelName='Name' value= {name} onChange={(e) => setName(e.target.value) }/>
        <InputLabel placeholder='Enter Born Year' name='born' labelName='Born Year' value= {born} onChange={(e) => setBorn(e.target.value)}/>

        <button type='submit'> Change Born Year</button>
      </form>


    </div>
  );
};

export default BirthYearForm;