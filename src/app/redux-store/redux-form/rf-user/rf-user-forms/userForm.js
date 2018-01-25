import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm ,reset } from 'redux-form';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {withRouter} from 'react-router'
import { required,email,number,minValue18 } from '../../../../components/components-lib/validations';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>{
  return (
    <div className="col-md-10">  
        <input className="form-control" type="text" {...input} / >

        {touched && (error && <span class='label label-danger'>{error}</span> )}
   </div>

);
} 



let UserForm =(props) =>{
 

  const { handleSubmit, pristine, reset, submitting } = props;
  const { user,userList } =props.userData;
  const {history,match} =props;
  //console.log(user.isEdit);
  console.log(match);
      return (
 
        <div>
        
              <form onSubmit={handleSubmit}>
              <div className='row text-center'>
              <h2>User Master</h2>
              </div>
              <div className='form-group row'>
                     <label htmlFor="firstName" className="col-md-2 col-form-label"> First Name</label>   
                                   
                     <Field name="user.firstName" component={renderField} type="text"  validate={ required }/>
                     
                </div>
                <div className='form-group  row'>
                     <label htmlFor="lastName" className="col-md-2 col-form-label"> Last Name</label>   
                                   
                     <Field name="user.lastName" component={renderField} type="text" validate={ required } />
                     
                </div>
                <div className='form-group  row'>
                     <label htmlFor="username" className="col-md-2 col-form-label"> User Name</label>   
                                   
                     <Field name="user.username" component={renderField} type="text"  disabled={false}  validate={ required }/>
                     
                </div>
                <div className='form-group row'>
                     <label htmlFor="email" className="col-md-2 col-form-label"> Email</label>   
                                   
                     <Field name="user.email" component={renderField} type="text"  validate={ required }/>
                     
                </div>
                <div className='form-group row'>
                     <label htmlFor="age" className="col-md-2 col-form-label"> Age </label>   
                                   
                     <Field name="user.age" component={renderField} type="text" validate={ required } />
                     <Field name="user.tcode" component='input' type="hidden" />
                     
                </div>
      <div className='form-group row'>
                <div className='col-sm-3 col-md-3'>
                    <button type="submit" className='btn btn-primary btn-sm' disabled={submitting}>Submit</button>
                 </div> 
                 <div className='col-sm-3 col-md-3'>
                    <button type="button" className='btn btn-primary btn-sm'  onClick={()=>{props.fetchAllUsers({clnt:4500,lang:'EN'}) }}>Clear</button>  
                  </div>
                  <div className='col-sm-3 col-md-3'>
                    <button type="button" className='btn btn-primary btn-sm'  onClick={()=>{ let url =match.url.replace('/save','');     history.push(url)}}>Back</button>  
                  </div>
      </div>
              </form>
             
         </div>
     
            
      );
    
  }



  const submitSuccess = (result,dispatch)=>  {
      console.log('Value Submited Done..!'); 
      dispatch(reset('UserForm'));

  }




  UserForm = reduxForm({
    // a unique name for the form
    form: 'UserForm' ,
 
    onSubmitSuccess : submitSuccess,
    enableReinitialize :true
    
  })( UserForm) ;


  

export default withRouter(UserForm);