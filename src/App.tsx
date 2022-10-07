import React, { useState } from 'react';
import Authors from './Components/Authors';
import Books from './Components/Book';
import NewBook from './Components/NewBook';

function App() {
  const [page, setPage] = useState('authors');

  return (
    <div>
      <div>
        <button type='button' onClick={() => setPage('authors')}>authors</button>
        <button type='button' onClick={() => setPage('books')}>books</button>
        <button type='button' onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
    </div>
  );
}

export default App;
