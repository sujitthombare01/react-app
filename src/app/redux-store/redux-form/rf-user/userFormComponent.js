import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
import UserForm from './rf-user-forms/userForm';
import { reset } from 'redux-form';
import UserGrid from './rf-user-forms/userGrid';
import _ from 'lodash';


import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
import { Switch} from 'react-router';
import {fetchAllUsers,userTransations,saveOrUpdateRoute} from './rf-user-forms/userActions'


class UserFormComponent extends Component {
  constructor() {
    super();
 
  }


 
submitForms = values =>{ 
 
  this.props.userTransations(values.user);

};




resetForm=() =>{
  this.props.resetForm('RESET');

}



componentDidMount(){

          this.props.fetchAllUsers({clnt:4500,lang:'EN'});
  }

  render() {

const {match} = this.props;
    return (
      <div>
        <Router>
          <div>

            <Switch>
               <Route  path={`${match.url}`}     exact render={(routeProps)=> (      <UserGrid  {...routeProps} {...this.props} userData={this.props.userReducer} edit={this.editRecord} delete ={this.deleteRecord}/>) }/>
               <Route  path={`${match.url}/save`}   exact   render={(routeProps)=> (       <UserForm userData={this.props.userReducer} {...this.props} onSubmit={this.submitForms.bind(this)} resetForm={this.resetForm}/> ) }/>
               <Route  path={`${match.url}/save/:userid`}      render={(routeProps)=> (       <UserForm userData={this.props.userReducer} {...this.props} onSubmit={this.submitForms.bind(this)} resetForm={this.resetForm}/> ) }/>
            
            
            </Switch>  
            
          </div>

         </Router> 
         
      </div>
    );
  }
}



const mapStateToProps =(state)=>{

  return {
    userReducer : state.userFormReducer,
    initialValues: state.userFormReducer
  }
};





export default connect(mapStateToProps,{userTransations,fetchAllUsers,saveOrUpdateRoute})(UserFormComponent);