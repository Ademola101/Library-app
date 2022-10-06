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

export const CREATEBOOK = gql`

mutation createBook($title : String!, $author : String!, $published : String!, $genres : [String!]) {
  addBook (
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title
    author
    published
    genres
  }
}


`;