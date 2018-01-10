import  React ,{Component} from "react";
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import userReducer from "../redux-store/reducers/userReducer";
import Header from './Header';
  

class Layout extends React.Component {
  constructor() {
    super();
 
  }

  clickbtn = ()=>{
    this.props.setName('Anna');
  }

  render() {
    return (
      <div className='container'>
           <input type='button' className='btn btn-primary' value ={this.props.user.username } onClick={this.clickbtn} />
                    <Header/>
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