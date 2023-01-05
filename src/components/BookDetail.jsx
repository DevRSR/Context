import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

function BookDetail({ book }) {
  
  const { dispatch } = useContext( BookContext )
  return (
    <div className='detail' onClick={ () =>  dispatch( { type:'REMOVE_BOOK', id: book.id }) }>
      <div className='title'>{ book.title }</div>
      <div className='author'>{ book.author }</div>
    </div>
  );
}

export default BookDetail;
