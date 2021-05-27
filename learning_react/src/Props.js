import React, { Component } from 'react'

class Car extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <h1>{this.props.brand.name} {this.props.brand.model}</h1>
        )
    }
}

export default class Garage extends Component {
    render() {
        //const model = "Mercedes Benz";
        const carinfo = {name:"Mercedes Benz", model:"AMG"};
        return (
            <div>
                <h1>Inside Garage, we have a </h1>
                <Car brand ={carinfo}></Car>
            </div>
        )
    }
}
