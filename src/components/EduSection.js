import React from "react";

class EduSection extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isEditable: true,
        schoolName: 'Northbrooks University',
        titleStudy: 'BA Computer Science',
        startDate: '12 July 18',
        endDate: '30 August 21'
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
                  <div>School: </div>
                  <div><input type="text" id='schoolName' onChange = {this.handleChange} value = {this.state.schoolName} /></div>  
                </div>
                <div>
                  <div>Title of Study: </div>
                  <div><input type="text" id='titleStudy' onChange = {this.handleChange} value = {this.state.titleStudy} /></div>  
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
                <div><strong>{this.state.titleStudy}</strong></div>
                <div><i>{this.state.schoolName}</i> </div>
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
  
  
export default EduSection;
  