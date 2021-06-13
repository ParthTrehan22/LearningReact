import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
        super(props);
        // this.state = {username: "", age: null, errorMessage: "", textAreaValue:"Hey welcome!!!", gender:"Male"};
        this.state = {gender:'Male'};
    }
    // multipleValuesHandler = (event) =>{
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     let err = "";
    //     if(nam === "age"){
    //         if(val != "" && !Number(val)){
    //             err = <strong>Age should be a number.</strong>
    //         }
    //     }
    //     this.setState({errorMessage: err});
    //     this.setState({[nam]: val});
    // }
    // submitHandler = (event) =>{
    //     event.preventDefault();
    //     alert("You are submitting "+this.state.username);
    // }
    // changeHandler = (event) => {
    //     this.setState({username: event.target.value});
    // }
    handleChange = (event) => {
        this.setState({gender : event.target.value});
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
                {/* <textarea value = {this.state.textAreaValue}></textarea>
                <h1>Hello {this.state.username} and your age is {this.state.age} and your gender is {this.state.gender}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.multipleValuesHandler}
                ></input>
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.multipleValuesHandler}
                >
                </input>
                {this.state.errorMessage} */}
                <select value={this.state.gender} onChange={this.handleChange}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select>
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
