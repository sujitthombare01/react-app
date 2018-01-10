import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

 const Header =props =>{
  
  
  
     
      return (
        <div className='container'>
             <input type='button' className='btn btn-primary' value='This is Header' />
             <input type='button' className='btn btn-danger' value='This stateless is Header' />
        </div>
      );
    
  }

  
export default Header;