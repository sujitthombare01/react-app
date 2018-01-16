import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
import UserForm from './rf-user-forms/userForm';
import { reset } from 'redux-form';
 import DataGrid from './../../../components/components-lib/dataGrid';


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

editRecord = value =>{
  console.log('Edit Record')
  this.props.fetchUser(value);
}

deleteRecord = value =>{
  console.log('Delete Record')
  console.log(value)
  this.props.deleteUser(value);
}

resetForm=() =>{
  this.props.resetForm('RESET');

}


//
  render() {
console.log();
    return (
      <div>
  
          <UserForm userData={this.props.userReducer} onSubmit={this.submitForms} 
            edit={this.editRecord} delete ={this.deleteRecord} resetForm={this.resetForm}/>
       
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
  },
  deleteUser :(userid)=>{ dispatch({type :'DELETE_USER',value:userid});},
  fetchUser :(userid)=>{ dispatch({type :'FETCH_USER',value:userid});},
  resetForm :(userid)=>{ dispatch({type :'RESET_FORM',value:'RESET'});}
};

};

export default connect(mapStateToProps,mapDispatchToPros)(UserFormComponent);