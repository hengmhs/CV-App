import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div className = 'container'>
      <h1>General Information</h1>
        <Section/>
      </div>
    );
  }

}

class Section extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditable: true,
      firstName: null,
      lastName: null,
      email: null,
      phoneNum: null
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
                <div><input type="text" id='firstName' onChange = {this.handleChange} /></div>  
              </div>
              <div>
                <div>Last Name: </div>
                <div><input type="text" id='lastName' onChange = {this.handleChange} /></div>  
              </div>
            </div>
            <div className='fieldRow'>
            <div>
                <div>Email: </div>
                <div><input type="text" id='email' onChange = {this.handleChange} /></div>  
              </div>
              <div>
                <div>Phone Number: </div>
                <div><input type="text" id='phoneNum' onChange = {this.handleChange} /></div>  
              </div>
            </div>
            <div className='editBtnDiv'>
              <button class='editBtn' onClick={this.changeEditStatus}>Edit</button>
            </div>
        </div>
      );
    }
    else{
      return (
        <div className='section'>   
            <div>First Name: {this.state.firstName} </div>
            <div>Last Name: {this.state.lastName} </div>
            <div>Email: {this.state.email} </div>
            <div>Phone Number: {this.state.phoneNum} </div>
        <div className='editBtnDiv'>
          <button className='editBtn' onClick={this.changeEditStatus}>Edit</button>
        </div>
    </div>
      )
    }
  }
}


export default App;
