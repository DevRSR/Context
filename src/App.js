import BookContextProvider from './context/BookContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='app'>
     <div className='header'>R-Library</div>
     <div className='list'>
       <BookContextProvider>
        <BookList />
        <BookForm />
       </BookContextProvider>
     </div>
    </div>
  );
}

export default App;
