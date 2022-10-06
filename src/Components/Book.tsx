import React from 'react';
import { Book } from '../../types';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS_WITHOUT_GENRE } from '../queries';


interface Props {
  show: boolean
}
const Books = ({ show }: Props) => {
  if (!show) {
    return null;
  }
  const { data, loading } = useQuery(ALL_BOOKS_WITHOUT_GENRE);


  if (loading) {
    return (
      <div>
        loading...</div>
    );
  }

  const books: Array<Book> = data.allBooks;




  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;