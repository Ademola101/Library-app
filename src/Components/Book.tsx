import React from 'react';
import { Book } from '../../types';

interface Props {
  show: boolean
}
const Books = ({ show }: Props) => {
  if (!show) {
    return null;
  }

  const books: Array<Book> = [];

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