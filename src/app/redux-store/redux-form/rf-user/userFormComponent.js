import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
import UserForm from './rf-user-forms/userForm';
import { reset } from 'redux-form';
 


class UserFormComponent extends React.Component {
  constructor() {
    super();
 
  }

 renderField = field =>{
    return (<input type='text' {...field.input} />);
  } 

submitForms = values =>{ 
  console.log('Submited Values')
  console.log(values)
  this.props.saveUser(values);

};

//
  render() {
console.log();
    return (
      <div>
  
          <UserForm userData={this.props.userReducer} onSubmit={this.submitForms}  />
       
      </div>
    );
  }
}




const mapStateToProps =(state)=>{

  return {
    userReducer : state.userFormReducer
  };
};

const mapDispatchToPros=(dispatch)=>{
return {
  saveUser  : (newUser)=> {
    dispatch({type: 'SAVE_USER', user : newUser });
  }
};

};

export default connect(mapStateToProps,mapDispatchToPros)(UserFormComponent);