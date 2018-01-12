import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userFormReducer from "./userFormReducer";
//import UserForm from './rf-user-forms/userForm';

 
import { Field, reduxForm } from 'redux-form'; 

class UserFormComponent extends React.Component {
  constructor() {
    super();
 
  }

submitForms = values =>{ 
  console.log('Here..$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  console.log(values)
  
};

//<UserForm onSubmit={this.submitForms} />
  render() {

    return (
      <div className='container'>
  

         <div className='container'>
         
         <form onSubmit={this.props.handleSubmit(this.submitForms)}>
           <div>
                <label htmlFor="firstName">First Name</label>
              
               <Field name="username" component='input' type="text"  />
           </div>
         
           <button type="submit">Submit</button>
         </form>
    </div>
      </div>
    );
  }
}


UserFormComponent = reduxForm({
  // a unique name for the form
  form: 'UserForm',
  //initialValues : props.userData.user
  
})( UserFormComponent) ;

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