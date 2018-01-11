import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
import UserForm from './rf-user-forms/userForm';

  

class UserFormComponent extends React.Component {
  constructor() {
    super();
 
  }

submitForms = values =>{ 
  
  console.log(values)
  
};

  render() {
      console.log(this.props.userReducer);
    return (
      <div className='container'>
         <UserForm userData ={this.props.userReducer} onSubmit={this.submitForms} />
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
  setName  : (name)=> {
    dispatch({type: 'SAVE_USER', value : name });
  }
};

};

export default connect(mapStateToProps,mapDispatchToPros)(UserFormComponent);