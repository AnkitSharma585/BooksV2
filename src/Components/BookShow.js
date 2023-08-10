import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const [editShow, setEditShow] = useState(false);
  const { onDelete } = useBooksContext();

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setEditShow(!editShow);
  };

  const onSubmit = () => {
    setEditShow(false);
  };

  let content = <h3>{book.title}</h3>;

  if (editShow) {
    content = <BookEdit onSubmit={onSubmit} book={book} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      {content}
      <div className='actions'>
        <button onClick={handleEditClick} className='edit' />
        <button onClick={handleDeleteClick} className='delete' />
      </div>
    </div>
  );
}
export default BookShow;
