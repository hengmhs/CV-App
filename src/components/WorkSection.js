import React from "react";

class WorkSection extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isEditable: true,
        isVisible: true,
        companyName: 'ABC Systems',
        jobTitle: 'Junior Software Engineer',
        startDate: '1 Jan 21',
        endDate: '22 December 21'
      };
      this.changeEditStatus = this.changeEditStatus.bind(this);
      this.changeVisibleStatus = this.changeVisibleStatus.bind(this);
      this.handleChange = this.handleChange.bind(this);
    };
  
    changeEditStatus(event) {
      let isEditable = this.state.isEditable;
      this.setState({isEditable: !isEditable})
    }

    changeVisibleStatus(event) {
      let isVisible = this.state.isVisible;
      this.setState({isVisible: !isVisible})
    }
  
    handleChange(event) {
      const name = event.target.id;
      this.setState({[name]: event.target.value});
      console.log(this.state[name]);
    }
  
    render() {
      let isEditable = this.state.isEditable;
      let isVisible = this.state.isVisible;
      if(!isVisible){
        return ( null );
      }
      if(isEditable){
        return (
          <div className='section'>   
              <div className='fieldRow'>
                <div>
                  <div>School: </div>
                  <div><input type="text" id='companyName' onChange = {this.handleChange} value = {this.state.companyName} /></div>  
                </div>
                <div>
                  <div>Title of Study: </div>
                  <div><input type="text" id='jobTitle' onChange = {this.handleChange} value = {this.state.jobTitle} /></div>  
                </div>
              </div>
              <div className='fieldRow'>
              <div>
                  <div>Start Date: </div>
                  <div><input type="text" id='startDate' onChange = {this.handleChange} value = {this.state.startDate} /></div>  
                </div>
                <div>
                  <div>End Date: </div>
                  <div><input type="text" id='endDate' onChange = {this.handleChange} value = {this.state.endDate} /></div>  
                </div>
              </div>
              <div className='OptionsBtnDiv'>
                <button  onClick={this.changeEditStatus}>Submit</button>
                <button onClick={this.changeVisibleStatus}>Delete</button>
              </div>
          </div>
        );
      }
      else{
        return (
          <div className='editsection'>
              <div className='printsection'>
                <div><strong>{this.state.jobTitle}</strong></div>
                <div><i>{this.state.companyName}</i> </div>
                <div>{this.state.startDate} - {this.state.endDate}</div>
              </div>   
            <div className='editBtnDiv'>
              <button className='editBtn' onClick={this.changeEditStatus}>🖊️</button>
            </div>
      </div>
        )
      }
    }
  }
  
  
export default WorkSection;
  