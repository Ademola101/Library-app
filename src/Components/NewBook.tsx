import React, { useState } from 'react';
import { Book } from '../../types';
import InputLabel from './InputLabel';
import { useMutation } from '@apollo/client';
import { CREATEBOOK, ALL_BOOKS_WITHOUT_GENRE } from '../queries';

interface Props {
  show: boolean
}
const NewBook = ({ show }:Props) => {

  const [createBook] = useMutation(CREATEBOOK, {
    refetchQueries: [{
      query: ALL_BOOKS_WITHOUT_GENRE
    }]
  });
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

  const submit = async (e:React.SyntheticEvent) => {
    e.preventDefault();

    const { title, author, published, genres } = Book;

    try {

      await createBook({
        variables: {
          title,
          author,
          published,
          genres
        },
      });

      setBook({
        title: '',
        author: '',
        published: '',
        genres: []

      });

    } catch (error) {

      console.log(error);


    }


  };


  const OnChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const { name, value } = e.target;
    setBook({ ...Book, [name]: value });

  };

  const handleGenreChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {

    setGenre(e.target.value);

  };

  const addGenre = () => {
    setBook({ ...Book, genres: Book.genres?.concat(genre) });
    setGenre('');
  };

  return (
    <div>
      <form onSubmit={submit}>

        <InputLabel labelName='title' value={Book.title} placeholder = 'Enter title' onChange={OnChange} name = 'title'/>
        <InputLabel labelName='author' value={Book.author} placeholder = 'Enter author' onChange={OnChange} name = 'author'/>
        <InputLabel labelName='published' value={Book.published} placeholder = 'Enter publish' onChange={OnChange} name = 'published'/>
        <InputLabel labelName='genre'  placeholder = 'Enter genre' value= {genre} onChange={handleGenreChange} name = 'genre'>

          <button type="button" onClick={addGenre}> + </button>
        </InputLabel>
        <div>
          genres: {Book.genres?.join(' ')}
        </div>
        <button type="submit">create book</button>


      </form>
    </div>
  );
};

export default NewBook;