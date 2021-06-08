import React from "react";
import './App.css';
import GenSection from './components/GenSection.js'
import EduSection from './components/EduSection.js'
import WorkSection from './components/WorkSection.js'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      education: [<EduSection/>],
      work: [<WorkSection/>],
    };
    this.addEdu = this.addEdu.bind(this);
    this.addWork = this.addWork.bind(this);
    }; 
  
   
    addEdu(){
      const education = this.state.education.concat(<EduSection/>);
      this.setState({education: education});
    };

    addWork(){
      const work = this.state.work.concat(<WorkSection/>);
      console.log(work);
      this.setState({work: work});
    };



  render() {
    return (
      <div className = 'container'>
      <h2>General Information</h2>
        <GenSection/>
        
      <h2>Education</h2>
        {this.state.education}
        <div class='BtnDiv'>
        <button className='Btn' onClick={this.addEdu}> Add </button>
        </div>

      <h2>Work Experience</h2>
      {this.state.work}
      <div class='BtnDiv'>
        <button className='Btn' onClick={this.addWork}> Add </button>
        </div>
      </div>

      
    );
  }
};

export default App;
