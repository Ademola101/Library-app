import React from 'react';
import { Author } from '../../types';
import { ALL_AUTHORS } from '../queries';
import { useQuery } from '@apollo/client';
interface Props {
  show: boolean
}
const Authors = ({ show }:Props) => {


  const { data, loading } = useQuery(ALL_AUTHORS);

  if(loading) {
    return (
      <div> loadding</div>
    );
  }


  const authors: Array<Author> = data.allAuthors;
  if (!show) {
    return null;
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;