import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';
import { Switch} from 'react-router';
import UserFormComponent from '../redux-store/redux-form/rf-user/userFormComponent';
import AboutPage from './components-lib/aboutPage';
import HomePage from './components-lib/homePage';


class Layout extends React.Component {
  constructor() {
    super();
 
  }

  clickbtn = ()=>{
    this.props.setName('Anna');
  }





  render()  {
  return (
      <div className='container'>
      <div className="container-fluid">
        

         <div className='row align-items-cente'>
             <div className='col-md-2'>
              
             </div>
             <div className='col-md-8'>
                   <Router>
                     <div>
                   <div className='row'>
                         <div className='col-md-4 col-sm-4'>
                              <Link to="/" className='btn btn-primary'>  Home </Link>
                         </div>
                         <div className='col-md-4 col-sm-4'>
                              <Link to="/about" className='btn btn-primary'>  About Us </Link>
                         </div>
                         <div className='col-md-4 col-sm-4'>
                               <Link to="/users" className='btn btn-primary'>  User Master </Link>
                         </div>
                   </div>
                   <hr/>
                   <div className='row'>
                   <Switch>
                      <Route exact path="/" component={HomePage}/>
                      <Route  path="/about" component ={AboutPage}/>
                      <Route  path="/users" component ={UserFormComponent}/>
           
                   </Switch>
                   </div>
                   </div>
                  </Router>  
                      
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