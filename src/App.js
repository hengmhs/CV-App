import React from "react";
import './App.css';
import GenSection from './components/GenSection.js'
import EduSection from './components/EduSection.js'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      education: [<EduSection/>],
    };
    this.addEdu = this.addEdu.bind(this);
    }; 
  
   
    addEdu(){
      console.log('test');
      const education = this.state.education.concat(<GenSection/>);
      console.log(education);
      this.setState({education: education});
    };



  render() {
    return (
      <div className = 'container'>
      <h2>General Information</h2>
        <GenSection/>
        
      <h2>Education</h2>
        {this.state.education}
        <button onClick={this.addEdu}> Add </button>
      </div>
    );
  }
};

export default App;
