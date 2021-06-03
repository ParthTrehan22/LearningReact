import React, { Component } from 'react'

export default class Unmounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            show : "true"
        };
    }
    deleteHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myHeader;
        if (this.state.show) {
            myHeader = <UnmountingChild></UnmountingChild>;            
        }
        return (
            <div>
                <h1>{myHeader}</h1>
                <button type="button" onClick = {this.deleteHeader}>
                    Delete header
                </button>
            </div>
        )
    }
}
class UnmountingChild extends Component {
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        alert("The component is about to get unmounted.");
    }
    render() {
        return (
            <div>
                <h1>Hello this is the unmounting example.</h1>
            </div>
        );
    }
}
