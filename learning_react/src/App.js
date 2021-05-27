import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {color : "Red"};
  }
  render() {
    return (
      <div className="App">
        <h1>
          Hello World, I am {this.state.color} in color.
        </h1>
        <h2>
          Hello this is sent through props {this.props.color}
        </h2>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!!</h1>
//     </div>
//   );
// }

// export default App;
