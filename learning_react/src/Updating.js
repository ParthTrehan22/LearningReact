import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand : "Mercedes Benz",
            model : "AMG",
            year : 2035,
            color: "Black"
        };
    }
    // changeColor = () =>{
    //     this.setState({color:"White"})
    // }
    componentDidMount(){
        setTimeout(() => {
            this.setState({model:"CLS 200"})
        }, 5000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "The value before the update was"+prevState.model;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "The value after the update is"+this.state.model;
    }
    // //Stops the updation from happening
    // shouldComponentUpdate(){
    //     return false;
    // }
    // static getDerivedStateFromProps(props, state){
    //     return {color: props.color};
    // }
    render() {
        return (
            <div>
                {/* <div id="div1">
                    <h1>The Garage contains</h1>
                    <p>Brand: {this.state.brand}</p>
                    <p>Model: {this.state.model}</p>
                    <p>Year: {this.state.year}</p>
                    <p>Color: {this.state.color}</p>
                    <button type="button" onClick = {this.changeColor}>
                        Change Color
                    </button>
                </div> */}
                <div id="div1">
                </div>
                <div id="div2">
                </div>
            </div>
        )
    }
}
