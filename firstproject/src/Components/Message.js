import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "WELCOME TO OUR WEBSITE "
        }
    }

    changeMessage() {
        this.setState({
            message: "THANK YOU FOR YOUR SUPPORT"
        })
    }
    render() {
        return ( <
            div >
            <
            h3 > { this.state.message } < /h3>  <
            button className = "btn btn-success"
            onClick = {
                () => this.changeMessage()
            } > If you like this website, Lets join us ClickMe < /button> < /
            div >
        )
    }
}

export default Message;