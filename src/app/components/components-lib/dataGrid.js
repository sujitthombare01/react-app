import  React from "react";
import ReactDom from 'react-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";


const DataGrid = (props) =>{
 let data = [{name:'ABCD' ,age: 20 , username: 'abcd@pqrs.com'},{name:'PBCD' ,age :20 , username: 'abcd@pqrs.com'}];
return (
<div>  <ReactTable data={data} columns={[{
                  Header: "Name",
                  accessor: "name",
                  Cell : row => (<input type='button' className='btn btn-primary' value={row.value}/>)
                },{
                    Header: "Age",
                    accessor: "age"
                  },{
                    Header: "User Name",
                    accessor: "username"
                  }]} 
                  defaultPageSize={5}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        <em>
                          You can put any component you want here, even another React
                          Table!
                        </em>
                    </div> )}}
                 
                  />  </div> 
)

}

export default DataGrid;