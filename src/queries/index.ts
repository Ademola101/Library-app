import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      id
      bookCount
      
    }
  }

`;

export const ALL_BOOKS_WITHOUT_GENRE  = gql`

query {
  allBooks {
    author
    title
    published
    id

  }
}


`;