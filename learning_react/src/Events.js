import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props){
        super(props);
        this.scoreGoalBad = this.scoreGoalBad.bind(this);
    }
    eventInfo = (message, eventType) => {
        alert(message+eventType.type);
    }
    eventInfoBind(message,eventType){
        alert(message+eventType.type);
    }
    scoreParam = (message) =>{
        alert(message);
    }
    scoreParamRegular(message){
        alert(message);
    }
    scoreGoalRegular(){
        alert("Regular Goal scored.")
    }
    scoreGoal = () => {
        alert("You scored an awesome goal.")
    }
    scoreGoalBad(){
        alert("Bad goal scored.")
    }
    render() {
        return (
            <div>
                <h2>Click the button to score a goal.</h2>              
                <button onClick={this.scoreGoal}>Click to awesome score</button>
                <button onClick={this.scoreGoalRegular}>Click to regular score</button>
                <button onClick={this.scoreGoalBad}>Click to bad score</button> 
                <button onClick={() => this.scoreParam("Congratulations Chelsea FC")}>Click to win Champions league</button>
                <button onClick={this.scoreParamRegular.bind(this,"Congratulations Villareal FC")}>Click to win Europa league</button>{/* Note in this case if we dont bind this event handler using the bind function then this function will be called as soon as the page loads.*/}
                <button onClick={(ev) => this.eventInfo("Congratulations Chelsea FC",ev)}>Click to win Champions league</button>
                <button onClick={this.eventInfoBind.bind(this,"Congratulations Villareal FC")}>Click to win Europa league</button>
            </div>
        )
    }
}
