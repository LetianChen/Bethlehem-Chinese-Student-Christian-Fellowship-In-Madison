import React from 'react';
import './bible.css';

function BibleBookCard(props) {
    return (
        <div className="bibleBookCard" id={props.bookId} onClick={props.clickHandler}>
            {props.bookName}
        </div>
    )
}

export default BibleBookCard