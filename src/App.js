import React from "react";
import './App.css';
import './components/GenSection.js'

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
        <GenSection/>
      </div>
    );
  }

}

class GenSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditable: true,
      firstName: 'Jeffret',
      lastName: 'Sanders',
      email: 'jeffers@gmail.com',
      phoneNum: '91231234'
    };
    this.changeEditStatus = this.changeEditStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  changeEditStatus(event) {
    let isEditable = this.state.isEditable;
    this.setState({isEditable: !isEditable})
  }

  handleChange(event) {
    const name = event.target.id;
    this.setState({[name]: event.target.value});
    console.log(this.state[name]);
  }

  render() {
    let isEditable = this.state.isEditable;
    if(isEditable){
      return (
        <div className='section'>   
            <div className='fieldRow'>
              <div>
                <div>First Name: </div>
                <div><input type="text" id='firstName' onChange = {this.handleChange} value = {this.state.firstName} /></div>  
              </div>
              <div>
                <div>Last Name: </div>
                <div><input type="text" id='lastName' onChange = {this.handleChange} value = {this.state.lastName} /></div>  
              </div>
            </div>
            <div className='fieldRow'>
            <div>
                <div>Email: </div>
                <div><input type="text" id='email' onChange = {this.handleChange} value = {this.state.email} /></div>  
              </div>
              <div>
                <div>Phone Number: </div>
                <div><input type="text" id='phoneNum' onChange = {this.handleChange} value = {this.state.phoneNum} /></div>  
              </div>
            </div>
            <div className='submitBtnDiv'>
              <button className='submitBtn' onClick={this.changeEditStatus}>Submit</button>
            </div>
        </div>
      );
    }
    else{
      return (
        <div className='editsection'>
            <div className='printsection'>
              <div><strong>{this.state.firstName} {this.state.lastName}</strong></div>
              <div>📧 {this.state.email} </div>
              <div>📞 {this.state.phoneNum} </div>
            </div>   
          <div className='editBtnDiv'>
            <button className='editBtn' onClick={this.changeEditStatus}>🖊️</button>
          </div>
    </div>
      )
    }
  }
}


export default App;
