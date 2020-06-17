import React, { Component } from 'react';
import './GroupPage.css';
import OneTalk from './OneTalk';
import GSheetReader from 'g-sheets-api';
import MediaContentPage from './MediaContentPage';

class GroupPage extends Component {
    constructor(props){
        super();
        this.state = {
            contentType: "talkList",
            talks: [],
            talkId: ""
        } 
    }

    componentDidMount(){
        const options ={
            sheetId: "12eapL1epC-Aa2N1uexOw8nKQK0Q_v9yzqn9_HKnS9lE",
            sheetNumber: 1,
            returnAllResults: true
        }
        GSheetReader(options, results => {
            console.log(results)
        })
    }

    onTalkClick = (event) => {
        this.setState({
            talkId: event.target.id,
            contentType: "oneTalk"
        })
    }

    render(){
        if(this.state.contentType === "talkList"){
            return(
                <div className="talksLayout">
                    <OneTalk topic="What is the Bible" 
                            date="06/12/2020" 
                            tags="Bible Intro" 
                            description="Intro to what the Bible is and how to read the Bible"
                            talkId="1"
                            onClickHandler={this.onTalkClick}/>
                </div>
            )
        }else{
            return(
                <MediaContentPage slideUrl="https://docs.google.com/presentation/d/e/2PACX-1vS-Bh7C9yRZhu3MUgVMTBx34DG9aFzcSTqGWu6VMOjX1o_rz0nR4JeIeeq16oRiUw/embed?start=false&loop=false&delayms=3000"
                                  videoUrl="https://www.youtube.com/embed/ak06MSETeo4"
                                  docsUrl="https://docs.google.com/document/d/e/2PACX-1vSETygR_4K0lLJGt20IHJ7ivxV-A8BOCLhVK1ZkPdDO-KIfRdhjywKNKB0hl57erDAg-RydVNvSh_On/pub?embedded=true" />
            )
        }
    }
}

export default GroupPage;
