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
             <input type='button' value='Add User' className='btn btn-primary btn-sm' onClick={()=>{history.push(`${match.url}/save`)}}/>
        </div>
        <div className='row'>
        <ReactTable data={userList} columns={[
                {
                  Header: "Edit",
                  accessor: "user.username",
                  Cell : (row)=>(<input type='button' class='btn btn-primary btn-sm' onClick={()=>{props.edit(row.value);  history.push(`${match.url}/save`)   }} value='Edit'/>)
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

export default withRouter(UserGrid);