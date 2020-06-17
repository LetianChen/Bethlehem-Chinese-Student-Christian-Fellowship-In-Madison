import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import HomePage from './HomePage'
import BiblePage from './BiblePage'
import GroupPage from './GroupPage'
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            page: "home"
        }
    }

    onSelectHandler = (eventKey) => {
        this.setState({
            page: eventKey
        })
    }

    onClickHandler = (event) => {
        this.setState({
            page: event.target.getAttribute("data-eventkey")
        })
    }

    render(){
        const nav = (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand id="home"><img width="40px" alt="logo" src="Church in Metro Madison Final.png" />  麦城伯利恒学生团契</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="home" onSelect={this.onSelectHandler}>首页</Nav.Link>
                        <Nav.Link eventKey="bible" onSelect={this.onSelectHandler}>查阅圣经</Nav.Link>
                        <Nav.Link eventKey="groupResource" onSelect={this.onSelectHandler}>团契资源</Nav.Link>
                        <Nav.Link eventKey="groupIntro" onSelect={this.onSelectHandler}>团契介绍</Nav.Link>
                        <Nav.Link eventKey="contact" onSelect={this.onSelectHandler}>联系我们</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
        let currentPage
        switch (this.state.page) {
            case "bible":
                currentPage = <BiblePage />
                break;
            case "groupResource":
                currentPage = <GroupPage />
                break;
            case "home":
            default:
                currentPage = <HomePage onClickHandler={this.onClickHandler} />
                break;
        }
        return (
            <div className="appPage">
                {nav}
                {currentPage}
            </div>
        )
    }
}

export default App