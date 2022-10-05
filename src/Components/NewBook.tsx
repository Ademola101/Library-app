import React, { useState } from 'react';
import { Book } from '../../types';
import InputLabel from './InputLabel';

interface Props {
  show: boolean
}
const NewBook = ({ show }:Props) => {
  const [Book, setBook] = useState<Book>({
    title: '',
    author: '',
    published: '',
    genres: [],
  });

  const [genre, setGenre] = useState<string>('');

  if (!show) {
    return null;
  }

  const submit = async (event:React.SyntheticEvent) => {
    event.preventDefault();

  };


  const OnChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const { name, value } = e.target;
    setBook({ ...Book, [name]: value });

  };

  const addGenre = () => {
    setBook({ ...Book, genres: Book.genres.concat(genre) });
    setGenre('');
  };

  return (
    <div>
      <form onSubmit={submit}>

        <InputLabel labelName='title' value={Book.title} placeholder = 'Enter title' onChange={OnChange} name = 'title'/>
        <InputLabel labelName='author' value={Book.author} placeholder = 'Enter author' onChange={OnChange} name = 'author'/>
        <InputLabel labelName='published' value={Book.published} placeholder = 'Enter publish' onChange={OnChange} name = 'published'/>
        <InputLabel labelName='genre' value={genre} placeholder = 'Enter genre' onChange={OnChange} name = 'genre'>

          <button type="button" onClick={addGenre}> + </button>
        </InputLabel>
        <div>
          genres: {Book.genres.join(' ')}
        </div>
        <button type="submit">create book</button>


      </form>
    </div>
  );
};

export default NewBook;