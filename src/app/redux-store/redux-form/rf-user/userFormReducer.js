import _ from 'lodash';
import axios from 'axios';
import {AUTH_URL} from '../../../components/components-lib/URL_DETAILS';

const userFormReducer = (state={
    user : {  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create',isEdit : false},
    userList :[]
} , action)=>{
    switch (action.type) {


        case 'FETCH_USER' :
                    var newUser={};
                    state.userList.map(function(user){
                        if( user.user.username=== action.value) newUser=user.user;
                    })
                    newUser.tcode ='update';
                    state = {...state, user : newUser  };
                // dispatch(reset('UserForm'));
                    break;


                    
         case 'FETCH_USERS' :
       
         state= {user:{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'},userList:action.users}
         
         break;

         case 'RESET_FORM' :
                state ={...state ,user:action.payload}
         break;


    }

    return state;



}

export default userFormReducer;