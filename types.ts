export interface Author {
  name: string;
  born?: number;
  bookCount?: number;

}

export interface Book {
  title: string;
  published: string;
  author: string;
  genres?: string[];
}

