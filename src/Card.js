import React from 'react';
import './Card.css';
import bible from './bible.jpeg'
import study from './study.jpeg'
//import church from './church.png'
import testimony from './testimony.jpeg'

function Card(props) {
    const { imgSrc, cardTitle, cardText, onClickHandler } = props;
    let img, cid
    if (imgSrc === 'bible') {
      img = bible
      cid = "bible"
    }else if (imgSrc === 'study') {
      img = study
      cid = "groupResource"
    }else if (imgSrc === 'testimony') {
      img = testimony
      cid = "groupIntro"
    }
    // else if(imgSrc === 'church') {
    //   img = church
    //   cid = "groupIntro" 
    // }
    return (
        <div className="card" onClick={onClickHandler}>
          <img data-eventkey={cid} alt="titleImg" src={img} className="card-img-top"></img>
          <div data-eventkey={cid} className="card-body">
            <h5 data-eventkey={cid} className="card-title">{cardTitle}</h5>
            <p data-eventkey={cid} className="card-text">{cardText}</p>
          </div>
        </div>
    );
  }
  
export default Card;