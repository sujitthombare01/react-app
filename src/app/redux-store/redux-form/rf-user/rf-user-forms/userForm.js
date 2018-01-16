import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm ,reset } from 'redux-form';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { required,email,number,minValue18 } from '../../../../components/components-lib/validations';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>{
  return (
    <div className="col-md-10">  
        <input className="form-control" type="text" {...input} / >

        {touched && (error && <span class='label label-danger'>{error}</span> )}
   </div>

);
} 



let UserForm =props =>{
 
  const { handleSubmit, pristine, reset, submitting } = props;
  const { user,userList } =props.userData;
console.log(user.isEdit);

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
                                   
                     <Field name="user.email" component={renderField} type="text"  validate={[ required,email] }/>
                     
                </div>
                <div className='form-group row'>
                     <label htmlFor="age" className="col-md-2 col-form-label"> Age </label>   
                                   
                     <Field name="user.age" component={renderField} type="text" validate={ [required,number,minValue18] } />
                     <Field name="user.tcode" component='input' type="hidden" />
                     
                </div>
      <div className='form-group row'>
                <div className='col-sm-3 col-md-3'>
                    <button type="submit" className='btn btn-primary btn-sm' disabled={submitting}>Submit</button>
                 </div> 
                 <div className='col-sm-3 col-md-3'>
                    <button type="button" className='btn btn-primary btn-sm'  onClick={()=>{props.resetForm();}}>Clear</button>  
                  </div>
      </div>
              </form>
              <div className='row'>
              <ReactTable data={userList} columns={[
                {
                  Header: "Edit",
                  accessor: "user.username",
                  Cell : (row)=>(<input type='button' class='btn btn-primary btn-sm' onClick={()=>{props.edit(row.value)}} value='Edit'/>)
                }, {
                  Header: "Delete",
                  accessor: "user.username",
                  Cell : (row)=>(<input type='button' class='btn btn-danger btn-sm' onClick={()=>{props.delete(row.value)}} value='Delete'/>)
                },
                {
                  Header: "First Name",
                  accessor: "user.firstName"
                },{
                    Header: "Last Name",
                    accessor: "user.lastName"
                  },{
                    Header: "User Name",
                    accessor: "user.username"
                  },
                  {
                    Header: "Age",
                    accessor: "user.age"
                  },{
                    Header: "Email",
                    accessor: "user.email"
                  }]} 
                  defaultPageSize={5}
                  SubComponent={row => {
                    
                    return (

                      <div style={{ padding: "20px" }}>
                        <em>
                        First Name  : {row.row['user.firstName']}
                        </em>
                    </div> )}}
                 
                  />
                </div>
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


UserForm = connect(
    state => ({ initialValues: state.userFormReducer } ),
    null    
  )(UserForm);

  

export default UserForm;