import React, { Component } from 'react';
import './bible.css';
import BibleIntro from './BibleInto'
import BibleBooks from './BibleBooks'
import BibleOneBook from './BibleOneBook'
import bibleData from './bibleData.js'

class BiblePage extends Component {
    constructor(){
        super();
        this.state = {
            contentType: '0',
            book: '',
            chapter: '',
            ntBooks: [
                [40,'马太福音','Matthew'],
                [41,'马可福音','Mark'],
                [42,'路加福音','Luke'],
                [43,'约翰福音','John'],
                [44,'使徒行传','Acts'],
                [45,'罗马书','Romans'],
                [46,'哥林多前书','1Corinthians'],
                [47,'哥林多后书','2Corinthians'],
                [48,'加拉太书','Galatians'],
                [49,'以弗所书','Ephesians'],
                [50,'腓立比书','Philippians'],
                [51,'歌罗西书','Colossians'],
                [52,'帖撒罗尼迦前书','1Thessalonians'],
                [53,'帖撒罗尼迦后书','2Thessalonians'],
                [54,'提摩太前书','1Timothy'],
                [55,'提摩太后书','2Timothy'],
                [56,'提多书','Titus'],
                [57,'腓利门书','Philemon'],
                [58,'希伯来书','Hebrews'],
                [59,'雅各书','James'],
                [60,'彼得前书','1Peter'],
                [61,'彼得后书','2Peter'],
                [62,'约翰一书','1John'],
                [63,'约翰二书','2John'],
                [64,'约翰三书','3John'],
                [65,'犹大书','Jude'],
                [66,'启示录','Revelation']
            ],
            otBooks: [
                [1,'创世纪','Genesis'],
                [2,'出埃及记','Exodus'],
                [3,'利未记','Leviticus'],
                [4,'民数记','Numbers'],
                [5,'申命记','Deuteronomy'],
                [6,'约书亚记','Joshua'],
                [7,'士师记','Judges'],
                [8,'路得记','Ruth'],
                [9,'撒母耳记上','1Samuel'],
                [10,'撒母耳记下','2Samuel'],
                [11,'列王记上','1Kings'],
                [12,'列王记下','2Kings'],
                [13,'历代志上','1Chronicles'],
                [14,'历代志下','2Chronicles'],
                [15,'以斯拉记','Ezra'],
                [16,'尼希米记','Nehemiah'],
                [17,'以斯帖记','Esther'],
                [18,'约伯记','Job'],
                [19,'诗篇','Psalms'],
                [20,'箴言','Proverbs'],
                [21,'传道书','Ecclesiastes'],
                [22,'雅歌','SongOfSongs'],
                [23,'以赛亚书','Isaiah'],
                [24,'耶利米书','Jeremiah'],
                [25,'耶利米哀歌','Lamentations'],
                [26,'以西结书','Ezekiel'],
                [27,'但以理书','Daniel'],
                [28,'何西阿书','Hosea'],
                [29,'约珥书','Joel'],
                [30,'阿摩司书','Amos'],
                [31,'俄巴底亚书','Obadiah'],
                [32,'约拿书','Jonah'],
                [33,'弥迦书','Micah'],
                [34,'那鸿书','Nahum'],
                [35,'哈巴谷书','Habakkuk'],
                [36,'西番雅书','Zephaniah'],
                [37,'哈该书','Haggai'],
                [38,'撒迦利亚书','Zechariah'],
                [39,'玛拉基书','Malachi']
            ],
            bible: bibleData
        }
    }

    handleBookClick = (event) => {
        this.setState({
            book: event.target.id,
            contentType: '1'
        })
    }

    render(){
        let content = '';
        switch(this.state.contentType){
            case '0':
                content = (
                    <div className="biblePage">
                        <BibleIntro />
                        <BibleBooks ntBooks={this.state.ntBooks} otBooks={this.state.otBooks} clickHandler={this.handleBookClick}/>
                    </div>
                )
                break;
            case '1':
                let bookName;
                let idx = this.state.book - 1;
                if(idx <= 38){
                    bookName = this.state.otBooks[idx];
                }else{
                    bookName = this.state.ntBooks[idx - 39];
                }
                content = (
                    <div className="biblePage">
                        <BibleOneBook book={this.state.book} bookData={this.state.bible} bookName={bookName[1]}/>
                    </div>
                )
                break;
            default:
                break;
        }
        return content;
    }
}

export default BiblePage