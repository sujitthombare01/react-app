import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';
import { Switch } from 'react-router';
import UserFormComponent from '../redux-store/redux-form/rf-user/userFormComponent';
import AboutPage from './components-lib/aboutPage';
import HomePage from './components-lib/homePage';
import Header from './components-layout/header';
import Sidebar from './components-layout/sidebar';
class Layout extends React.Component {
  constructor() {
    super();
 
  }

  clickbtn = ()=>{
    this.props.setName('Anna');
  }

  toggleClass=()=>{

    ReactDom.findDOMNode(this.refs.sidebarbox).classList.toggle('sidebarBox-close'); 
  
  }



  render()  {
  return (
  

<Router>
<div class="overflow">
         <Header toggleClassHandle={this.toggleClass.bind(this)} ></Header>
         <Sidebar class="sidebarBox" ref='sidebarbox' ></Sidebar>

           
            <div class="contentBox">
              <div class="workBox">
               
                   <Switch>
                      <Route exact path="/" component={HomePage}/>
                      <Route  path="/about" component ={AboutPage}/>
                      <Route  path="/users" component ={UserFormComponent}/>
           
                   </Switch>
                
               </div>		
            </div>
            </div>
            </Router>
			
			

		
		

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

export default  connect(mapStateToProps,mapDispatchToPros)(Layout);