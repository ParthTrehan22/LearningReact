import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {username: ""};
    }
    multipleValuesHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        let gender = event.target.gender;
        this.setState({[nam]: val});
    }
    submitHandler = (event) =>{
        event.preventDefault();
        alert("You are submitting "+this.state.username);
    }
    changeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        // let header = "";
        // if(this.state.username){
        //     header = <h1>Hello: {this.state.username}</h1>;
        // }else{
        //     header = "";
        // }
        return (
            <form>
                <h1>Hello {this.state.username} and your age is {this.state.age} and your gender is {this.state.gender}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.multipleValuesHandler}
                ></input>
                <p>Enter your gender:</p>
                <input
                    type='text'
                    name='gender'
                    onChange={this.multipleValuesHandler}
                ></input>
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.multipleValuesHandler}
                >
                </input>
            </form>
            // <form onSubmit = {this.submitHandler}>
            //     {header}
            //     <p>Name:</p>
            //     <input 
            //     type="text"
            //     onChange = {this.changeHandler}
            //     ></input>
            //     <input type="submit"></input>
            // </form>
        );
    }
}
