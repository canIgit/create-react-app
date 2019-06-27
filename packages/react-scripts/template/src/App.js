import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  readEnv(){
    if(!process.env.REACT_APP_EMPLOYER || !process.env.REACT_APP_POSITION){
      throw new Error('Please define `REACT_APP_EMPLOYER` and `REACT_APP_POSITION`');
    }

    const employer = process.env.REACT_APP_EMPLOYER;
    const position = process.env.REACT_APP_POSITION;

    return {employer, position};
  }

  render(){
    const {employer, position} = this.readEnv;

    return (
      <div className="App">
        <div className="App-header">
          <p className="App-intro">
          <b>Employer: {employer} </b>
          <b>position: {position} </b>
          </p>
        
        </div>
      
      </div>
    )
  }
}

export default App;
