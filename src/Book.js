import React from 'react';

function Book({ img, title, auther }) {
    const clickHandler = () => {
        alert('Hello World');
    };
    const complexExample = (auther) => {
        console.log(auther);
    };
    return (
        <div className='book'>
            <img src={img} alt='' width='120px' />
            {/* In line function  */}
            <h3
                className='title'
                onClick={() => {
                    console.log(title);
                }}
            >
                {title}
            </h3>
            <p>{auther}</p>
            <button type='button' onClick={clickHandler}>
                Reference Example
            </button>
            <button type='button' onClick={() => complexExample(auther)}>
                Auther Name
            </button>
        </div>
    );
}

export default Book;
