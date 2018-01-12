import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const renderField = field =>{
  return (<input type='text' {...field.input} />);
} 

let UserForm =props =>{
  
  
  const { handleSubmit } = props;
//  const { username} =props.userData.user;

      return (
        <div className='container'>
         
              <form onSubmit={handleSubmit}>
                <div>
                     <label htmlFor="firstName">First Name</label>
                   
                    <Field name="username" component={renderField} type="text"  />
                </div>
              
                <button type="submit">Submit</button>
              </form>
         </div>
     
            
      );
    
  }

  UserForm = reduxForm({
    // a unique name for the form
    form: 'UserForm',
    //initialValues : props.userData.user
    
  })( UserForm) ;

  

export default UserForm;