import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm ,reset } from 'redux-form';
import ReactTable from 'react-table';
import "react-table/react-table.css"
import {withRouter} from 'react-router';


let UserGrid = props =>{
    const { user,userList } =props.userData;
    const {history,match} = props;
  
return(

    <div>
         <div className='row text-center'>
             <h2>User Table</h2>
        </div>
        <div className='row'>
             <input type='button' value='Add User' className='btn btn-primary btn-sm' onClick={()=>{ props.saveOrUpdateRoute(history,match.url,'create',null);  }}/>
        </div>
        <div className='row'>
        <ReactTable data={userList} columns={[
                {
                  Header: "Edit",
                  accessor: "username",
                  Cell : (row)=>(<input type='button' class='btn btn-primary btn-sm' onClick={()=>{ props.saveOrUpdateRoute(history,match.url,'update',row.value)  }} value='Edit'/>)
                }, {
                  Header: "Delete",
                  accessor: "username",
                  Cell : (row)=>(<input type='button' class='btn btn-danger btn-sm' onClick={()=>{ props.userTransations({username:row.value,tcode:'delete'})}} value='Delete'/>)
                },
                {
                  Header: "First Name",
                  accessor: "firstName"
                },{
                    Header: "Last Name",
                    accessor: "lastName"
                  },{
                    Header: "User Name",
                    accessor: "username"
                  },
                  {
                    Header: "Age",
                    accessor: "age"
                  },{
                    Header: "Email",
                    accessor: "email"
                  }]} 
                  defaultPageSize={5}
                  SubComponent={table => {
                    
                    return (

                      <div style={{ padding: "20px" }}>
                        <em>
                        First Name  : {table.row['firstName']}
                        </em>
                    </div> )}}
                 
                  />
                </div>  
    </div>
);

}

export default withRouter(UserGrid);