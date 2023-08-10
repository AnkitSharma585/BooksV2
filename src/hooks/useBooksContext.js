import { useContext } from 'react';
import BooksContext from '../Context/Books';

function useBooksContext() {
  return useContext(BooksContext);
}
export default useBooksContext;
