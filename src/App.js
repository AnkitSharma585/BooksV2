import { useEffect } from 'react';
import useBooksContext from './hooks/useBooksContext';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}
export default App;
