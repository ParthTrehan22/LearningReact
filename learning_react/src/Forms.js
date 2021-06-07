import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {username: ""};
    }
    changeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        return (
            <form>
                <h1>
                    Hello: {this.state.username}
                </h1>
                <p>Name:</p>
                <input 
                type="text"
                onChange = {this.changeHandler}
                ></input>
            </form>
        )
    }
}
