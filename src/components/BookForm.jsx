import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext'


function BookForm() {
  
  const [ title,setTitle ] = useState('');
  const [ author,setAuthor ] = useState('');
  
  
  const { dispatch } = useContext( BookContext )
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type:'ADD_BOOK', book:{ title, author, id:title[0] } })
    setAuthor('');
    setTitle('');
  }
 
  return (
    <form onSubmit={ handleSubmit }>
     <h3>Add New Book</h3>
      <input type='text' placeholder='title'
       value={ title } 
       onChange={ (e) => setTitle(e.target.value )}
       required
      />
      <input type='text' placeholder='author'
       value={ author } 
       onChange={ e => setAuthor(e.target.value)}
       required
       />
      <input type='submit' value='add book' />
    </form>
  );
}

export default BookForm;
