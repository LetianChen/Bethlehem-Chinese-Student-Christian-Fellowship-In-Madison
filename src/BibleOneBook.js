import React, { Component } from 'react';
import './bible.css';

class BibleOneBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: props.book,
            version: props.version,
            chapter: 1,
            bookName: props.bookName,
            bookData: props.bookData[props.book]['book']
        }
    }

    onSelectChange = (event) => {
        this.setState({
            chapter: event.target.value
        })
        console.log(this.state.chapter);
    }

    render(){
        const chaptArr = [];
        for (const chapKey in this.state.bookData){
            chaptArr.push(chapKey);
        }
        const verseArr = [];
        const chapterObj = this.state.bookData[this.state.chapter]['chapter'];
        for (const verseKey in chapterObj) {
            const verse = chapterObj[verseKey];
            verseArr.push(verse);
        }
        return (
            <div className="chapterContainer">
                <div className="chapterNav">
                    <h3>{this.state.bookName}</h3>
                    <select name="chapterSelect" id="chapterSelect" onChange={this.onSelectChange}>
                        {
                            chaptArr.map(chapterNum => {
                                return <option key={'chap'+chapterNum} value={chapterNum}>{chapterNum}</option>
                            })
                        }
                    </select>
                </div>
                <ol className="bibleVerses">
                    {
                        verseArr.map(curVerse => {
                            return <li key={'ver'+curVerse['verse_nr']}>{curVerse['verse']}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default BibleOneBook