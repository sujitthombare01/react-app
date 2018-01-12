import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userReducer from "../redux-store/reducers/userReducer";
import Header from './Header';

import UserFormComponent from '../redux-store/redux-form/rf-user/userFormComponent'
  

class Layout extends React.Component {
  constructor() {
    super();
 
  }

  clickbtn = ()=>{
    this.props.setName('Anna');
  }
/*
<div className='row'>
               <div className='col'>
               <input type='button' className='btn btn-primary' value ={this.props.user.username } onClick={this.clickbtn} />
               </div>
           </div>

*/
  render() {
    return (
        <div className='container'>
        <div className="container-fluid">
          

           <div className='row align-items-cente'>
               <div className='col-md-2'>
                
               </div>
               <div className='col-md-8'>
                      <UserFormComponent/>
               </div>
               <div className='col-md-2'>
                 
               </div>
           </div>
                
        </div>

        </div>
    );
  }
}


const mapStateToProps =(state)=>{

  return {
    user : state.userReducer
  };
};

const mapDispatchToPros=(dispatch)=>{
return {
  setName  : (name)=> {
    dispatch({type: 'CHANGE_NAME', value : name });
  }
};

};

export default connect(mapStateToProps,mapDispatchToPros)(Layout);