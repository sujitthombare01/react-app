import  React from "react";
import ReactDom from 'react-dom';

class Header extends React.Component {
    constructor() {
      super();
   
    }

    toggleTopBar=()=>{
         ReactDom.findDOMNode(this.refs.menuicon).classList.toggle('menu-icon-left'); 
        ReactDom.findDOMNode(this.refs.menuicon).classList.toggle('menu-icon-open'); 
        ReactDom.findDOMNode(this.refs.companyName).classList.toggle('companyName-close'); 
         ReactDom.findDOMNode(this.refs.companyNameshort).classList.toggle('companyName-short-close'); 
  
        this.props.toggleClassHandle();
    }


render() {
   
return (
    <div class='topbox'> 
						   
                           <div class='companyName' ref='companyName'>
                               <a href='#'>iTransform </a>
                               <span> software solutions </span>
                           </div>
                           <div class="menu-icon" ref='menuicon' onClick={this.toggleTopBar}>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <div class="companyName-short" ref='companyNameshort' >
                               <a href='#'>iTSS </a>
                           </div>
                           
                           <div class='headerUser'>
                              <a href='#'> <i class='fa fa-power-off'></i> Sign-Out </a>
                           </div>
                           
                         </div>

);

}

}
export default Header;