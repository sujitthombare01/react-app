import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
import UserForm from './rf-user-forms/userForm';
import { reset } from 'redux-form';
import UserGrid from './rf-user-forms/userGrid';


import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
import { Switch} from 'react-router';


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

const {match} = this.props;
    return (
      <div>
        <Router>
          <div>

            <Switch>
               <Route  path={`${match.url}`}     exact render={(routeProps)=> (      <UserGrid  {...routeProps} {...this.props} userData={this.props.userReducer} edit={this.editRecord} delete ={this.deleteRecord}/>) }/>
               <Route  path={`${match.url}/save`}      render={(routeProps)=> (       <UserForm userData={this.props.userReducer} {...this.props} onSubmit={this.submitForms} resetForm={this.resetForm}/> ) }/>
            
            
            </Switch>  
            
          </div>

         </Router> 
         
      </div>
    );
  }
}
/*
 <UserGrid userData={this.props.userReducer} edit={this.editRecord} delete ={this.deleteRecord}/>
  
          <UserForm userData={this.props.userReducer} onSubmit={this.submitForms} resetForm={this.resetForm}/>
   

*/ 



const mapStateToProps =(state)=>{

  return {
    userReducer : state.userFormReducer
  };
};

const mapDispatchToPros=(dispatch)=>{
return {
  saveUser  : (newUser)=> {  dispatch({type: 'AUTH_SAVE_USER', user : newUser })
                            ;
                            },
  
  
  deleteUser :(userid)=>{ dispatch({type :'DELETE_USER',value:userid});},
  fetchUser :(userid)=>{ dispatch({type :'FETCH_USER',value:userid});},
  resetForm :(userid)=>{ dispatch({type :'RESET_FORM',value:'RESET'});}
};

};

export default connect(mapStateToProps,mapDispatchToPros)(UserFormComponent);