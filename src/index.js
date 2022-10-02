import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

//Variables
const book1 = {
    img: 'https://cdn.lifehack.org/wp-content/uploads/2015/05/31055903/1-The-Kite-Runner-Riverhead-Edition.jpg',
    title: 'The Kite Runner',
    auther: 'by @sachin',
};
const book2 = {
    img: 'https://cdn.lifehack.org/wp-content/uploads/2015/03/Hobbit_book.jpg',
    title: 'The Habbit Book',
    auther: 'by @tolkieys',
};

const BookList = () => {
    return (
        <>
            <div className='box'>
                <Book img={book1.img} title={book1.title} auther={book1.auther}>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At facilis, cumque perferendis
                        necessitatibus architecto numquam, deleniti nisi laudantium inventore ratione rem, obcaecati
                        fuga quas dolor alias accusantium similique optio dolores.
                    </div>
                </Book>
                <Book img={book2.img} title={book2.title} auther={book2.auther} />
            </div>
        </>
    );
};

const Book = (props) => {
    const { img, title, auther, children } = props;
    return (
        <div className='book'>
            <img src={img} alt='' width='120px' />
            <p className='title'>{title}</p>
            <p>{auther}</p>
            <p>{children}</p>
        </div>
    );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
