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
      <div>
        <Section/>
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
    };
    this.changeEditStatus = this.changeEditStatus.bind(this);
  };

  changeEditStatus(event) {
    let isEditable = this.state.isEditable;
    this.setState({isEditable: !isEditable})
  }

  render() {
    return (
      <div className='section'>   
          <div className='fieldRow'>
            <EditField isEditable = {this.state.isEditable} labelName = 'First Name'/>
            <EditField isEditable = {this.state.isEditable} labelName = 'Last Name'/>
          </div>
          <div className='fieldRow'>
            <EditField isEditable = {this.state.isEditable} labelName = 'Email'/>
            <EditField isEditable = {this.state.isEditable} labelName = 'Phone Number'/>
          </div>
          <div className='editBtnDiv'>
            <button class='editBtn' onClick={this.changeEditStatus}>Edit</button>
          </div>
      </div>
    );
  }
}

class EditField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const isEditable = this.props.isEditable;
    const labelName = this.props.labelName;
    if(isEditable) {
      return(
        <div className="EditField">
          <div>{labelName}:</div>
          <div><input type="text" value={this.state.value} onChange = {this.handleChange} /></div>  
        </div>
      ) 
    } else {
      return (
        <div className="EditField">
            <div> {labelName}: {this.state.value} </div>
        </div>
      );
    }
    
  }

}



export default App;
