import React, { Component } from 'react';
import './bible.css';

class BibleOneChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            passage: props.passage,
            version: props.version
        }
    }

    componentDidMount() {
        const apiUrl = 'http://getbible.net/json?passage=' + this.state.passage + '&version='+this.state.version;
        fetch(apiUrl)
          .then(response=> response.json())
          .then(content => {this.setState({ data: content})});
    }

    render(){
        return (
            <div>
                <p>{this.state.data}</p>
            </div>);
    }
}

export default BibleOneChapter