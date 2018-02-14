import  React from "react";
import ReactDom from 'react-dom';

import {BrowserRouter as Router , Route ,Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor() {
      super();
   
    }

    toggleMenu=(ele)=>{
        let clickedUL =ele.target.closest('UL');
    
        let menuUL=ReactDom.findDOMNode(this.refs.mainmenu);
        if(clickedUL===menuUL){
                let childsLi = menuUL.children;
                let clickedLi =ele.target.closest('LI');
    
                for(let i = 0; i < childsLi.length; i++){
                      if(clickedLi!==childsLi[i])
                        { childsLi[i].classList.remove('active');
                        
                        }
                }
    
                clickedLi.classList.toggle("active");
      }
      }

render() {


return (
    <div class="sidebarBox" ref='sidebarbox'>
              <div class='userinfo'>
                 <img src='images/user-logo.png'/>
                 <span>
                  Sujit Thombare
                 </span>
               <div class='userSetting'>  
               <ul>
                <li>   <a href="#"> <i class='fa fa-cog'> </i> Setting</a></li>
                <li>  <a href="#"> <i class='fa fa-user'> </i> User Info</a></li>
               </ul>
                </div>
              </div>
              <div class='menubox'>
                <ul class="mainmenu" onClick={this.toggleMenu} id="mainmenuid" ref='mainmenu'>
               
                <li>  
                      <Link to="/" > <i class='fa fa-cog'> </i> Home </Link>
                </li>
               
                <li>  
                   <Link to="/about" > <i class='fa fa-cog'> </i>  About Us </Link>
                 </li>
               
                <li>  
                    <Link to="/users" > <i class='fa fa-user'> </i>  User </Link>
                </li>
               
                <li >  <a href="#"><i class='fa fa-cog'> </i>  Dashboard</a>
                       <ul class='submenu'>
                        <li>  <a href="#"> Submenu 01</a></li>
                        <li>  <a href="#"> Submenu 02</a></li>
                        <li>  <a href="#"> Submenu 03</a></li>
                      
                       </ul>

                </li>
                  <li>  <a href="#"><i class='fa fa-user'></i>  Forms</a>
                      <ul class='submenu'>
                    <li>  <a href="#"> Submenu 1</a></li>
                      <li>  <a href="#"> Submenu 2</a></li>
                      <li>  <a href="#"> Submenu 3</a></li>
                    
                       </ul>
                </li>
       
                <li>  <a href="#"><i class='fa fa-cog'> </i>  Graphs </a>
                  <ul class='submenu'>
                    <li>  <a href="#"> Submenu 11</a></li>
                      <li>  <a href="#"> Submenu 21</a></li>
                      <li>  <a href="#"> Submenu 31</a></li>
                    
                       </ul>
                </li>
                <li>  <a href="#"><i class='fa fa-user'></i>  Users profile</a></li>
                </ul>
              </div>
                
            </div>

);

}

}

export default Sidebar;