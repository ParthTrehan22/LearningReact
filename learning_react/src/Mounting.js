import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand : "Mercedes Benz",
            model : "AMG",
            year : 2035,
            color: "Black"
        };
    }
    // static getDerivedStateFromProps(props, state){
    //     return {model: props.model};
    // }
    componentDidMount(){
        setTimeout(() => {
           this.setState({model : "CLS 200"}) 
        }, 2000);
    }
    render() {
        return (
            <div>
                <h1>The Garage contains</h1>
                <p>Brand: {this.state.brand}</p>
                <p>Model: {this.state.model}</p>
                <p>Year: {this.state.year}</p>
                <p>Color: {this.state.color}</p>
                <button type="button" onClick = {this.changeColor}>
                    Change Color
                </button>
            </div>
        )
    }
}
