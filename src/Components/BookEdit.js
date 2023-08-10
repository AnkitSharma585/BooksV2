import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { onEdit } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
    onSubmit();
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className='book-edit'>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
