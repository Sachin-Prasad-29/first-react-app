import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//importing data
import { books } from './books';
import Book from './Book';

const BookList = () => {
    return (
        <>
            <div className='box'>
                {books.map((book) => {
                    return <Book key={book.id} {...book} />;
                })}
            </div>
        </>
    );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
