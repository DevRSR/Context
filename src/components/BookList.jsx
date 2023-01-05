import { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import BookDetail from './BookDetail';


function BookList() {
  
 const { books } = useContext( BookContext );
 
  return (
    <div>
      { books.length ? books.map( book => <BookDetail book={book} key={ book.id } /> ) : <div className='empty'> No book available, hello free time :) </div> }
    </div>
  );
}

export default BookList;
