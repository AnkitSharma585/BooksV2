import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookCreate() {
  const { onCreate } = useBooksContext();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Add new books</h3>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
