import React from "react";
import './App.css';
import GenSection from './components/GenSection.js'
import EduSection from './components/EduSection.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div className = 'container'>
      <h2>General Information</h2>
        <GenSection/>
      <h2>Education</h2>
        <EduSection/>
      </div>
    );
  }

}

export default App;
