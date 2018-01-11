import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const submitprop = (values)=> console.log(values);
 

let UserForm =props =>{
  
  
  const { handleSubmit } = props;
  const { username} =props.userData.user;

      return (
        <div className='container'>
         
              <form onSubmit={handleSubmit}>
                <div>
                     <label htmlFor="firstName">First Name</label>
           
                    <Field name="username" component="input" type="text"  />
                </div>
              
                <button type="submit">Submit</button>
              </form>
         </div>
     
            
      );
    
  }

  UserForm = reduxForm({
    // a unique name for the form
    form: 'UserForm'
    
  })( UserForm) ;

  

export default UserForm;