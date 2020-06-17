import React from 'react';
import './bible.css';
import BibleBookCard from './BibleBookCard'

function BibleBooks(props) {
    return (
        <div className="bible">
           <div className="bibleBookRow">
              <h3>旧约</h3>
              <hr/>
              <div className="bibleGrid">
                  { props.otBooks.map((book,i) => {
                      return <BibleBookCard bookName={props.otBooks[i][1]} 
                                            bookId={props.otBooks[i][0]} 
                                            key={props.otBooks[i][2]}
                                            clickHandler={props.clickHandler}/>
                  })}                
              </div>
          </div>
          <div className="bibleBookRow">
              <h3>新约</h3>
              <hr/>
              <div className="bibleGrid">
                  { props.ntBooks.map((book,i) => {
                      return <BibleBookCard bookName={props.ntBooks[i][1]} 
                                            bookId={props.ntBooks[i][0]} 
                                            key={props.ntBooks[i][2]}
                                            clickHandler={props.clickHandler}/>
                  })}
              </div>
          </div>
        </div>
    )

}

export default BibleBooks