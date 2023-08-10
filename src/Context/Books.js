import axios from 'axios';
import { createContext, useCallback, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const result = await axios.get('http://localhost:3005/books');
    setBooks(result.data);
  }, []);

  const onCreate = async (title) => {
    const result = await axios.post('http://localhost:3005/books', { title });
    const renderedBooks = [...books, result.data];
    setBooks(renderedBooks);
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3005/books/${id}`);
    const renderedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(renderedBooks);
  };

  const onEdit = async (id, newTitle) => {
    const result = await axios.put(`http://localhost:3005/books/${id}`, {
      title: newTitle,
    });

    const renderedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...result.data };
      } else return book;
    });
    setBooks(renderedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, onCreate, onDelete, onEdit }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
