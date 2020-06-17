import React from 'react';
import './CardGrid.css';
import Card from './Card';

function CardGrid(props) {
    return (
        <div className="cardGrid">
            <Card imgSrc="bible" 
                  cardTitle="查阅圣经" 
                  cardText="让我们一起来读神的话吧" 
                  onClickHandler={props.onClickHandler}/>
            <Card imgSrc="study" 
                  cardTitle="团契资料"
                  cardText="来这里更多的了解认识神，参加我们我们的团契吧！" 
                  onClickHandler={props.onClickHandler}/>
            <Card imgSrc="testimony" 
                  cardTitle="团契介绍" 
                  cardText="来这里了解我们团契的历史，见证我们的成长" 
                  onClickHandler={props.onClickHandler}/>
            {/* <Card imgSrc="church" cardTitle="寻找教会" cardText="教会是耶稣的身体，是每个基督徒的家，来这里找你在外的家吧"/> */}
        </div>
    );
  }
  
export default CardGrid;