import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm ,reset } from 'redux-form';


const renderField = field =>{
  return (
    <div className="col-md-10">  
        <input className="form-control" type="text" {...field.input} / >
   </div>

);
} 


const submitForms = values =>{ 
  console.log('Submited Values..!')
  console.log(values)


};


let UserForm =props =>{
  
  


      return (
 
        <div>
         
              <form onSubmit={props.handleSubmit}>
              <div className='row text-center'>
              <h2>User Update Form</h2>
              </div>
              <div className='form-group row'>
                     <label htmlFor="firstName" className="col-md-2 col-form-label"> First Name</label>   
                                   
                     <Field name="user.firstName" component={renderField} type="text"  />
                     
                </div>
                <div className='form-group  row'>
                     <label htmlFor="lastName" className="col-md-2 col-form-label"> Last Name</label>   
                                   
                     <Field name="user.lastName" component={renderField} type="text"  />
                     
                </div>
                <div className='form-group  row'>
                     <label htmlFor="username" className="col-md-2 col-form-label"> User Name</label>   
                                   
                     <Field name="user.username" component={renderField} type="text"  />
                     
                </div>
                <div className='form-group row'>
                     <label htmlFor="email" className="col-md-2 col-form-label"> Email</label>   
                                   
                     <Field name="user.email" component={renderField} type="text"  />
                     
                </div>
                <div className='form-group row'>
                     <label htmlFor="age" className="col-md-2 col-form-label"> Age </label>   
                                   
                     <Field name="user.age" component={renderField} type="text"  />
                     
                </div>

                
                    <button type="submit" className='btn btn-primary'>Submit</button>
                     
                         
             
              </form>
         </div>
     
            
      );
    
  }

  const submitSuccess = (result,dispatch)=>  {
      console.log('Value Submited Done..!'); 
      dispatch(reset('UserForm'));

  }

 UserForm = connect(
    state =>({ initialValues: state.userFormReducer } ),
  null    // bind account loading action creator
  )(UserForm);

  UserForm = reduxForm({
    // a unique name for the form
    form: 'UserForm' ,
    onSubmitSuccess : submitSuccess
  })( UserForm) ;


 

  

export default UserForm;