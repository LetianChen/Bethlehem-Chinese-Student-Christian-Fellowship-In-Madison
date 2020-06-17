import React from 'react';
import './OneTalk.css';

function OneTalk(props){
    let { topic, date, tags, description, talkId, onClickHandler } = props;
    return (
        <div className="oneTalk">
            <hr />
            <a href={"#talk"} id={"talk" + talkId} onClick={onClickHandler}>
                <div className="talkHeader"><span>{topic}</span></div>
                <div className="date"><span>{date}</span></div>
                <div className="tags"><span>{tags}</span></div>
                <div className="desc"><span>{description}</span></div>
            </a>
            <hr />
        </div>
    )
}

export default OneTalk;