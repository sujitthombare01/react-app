import axios from 'axios';
import _ from 'lodash';

import {AUTH_URL} from '../../../../components/components-lib/URL_DETAILS';

const fetchAllUsers =(data)=>{
console.log('Fetch All user')
            return (dispatch)=>{
            
            
                axios.get(`${AUTH_URL}/auth/getusers`,{params : data})
                .then(res=>{
                        console.log('Done Fetch User')
                        console.log(res)
                        dispatch({type: 'FETCH_USERS', users : res.data });
                    })
                .catch(err=>{
                    console.log('Error Fetch User')
                        console.log(err)
                });
            }
};

const saveOrUpdateRoute=(history,url,tcode,userid)=>{

    return (dispatch)=>{
            if(tcode==='create')
                {
                    dispatch({type: 'RESET_FORM', payload :{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'}});
                    history.push(`${url}/save`)
                }
    }

}


const saveUser = (newUser)=> {  
    console.log('Action Save users')
    console.log(newUser)
    console.log(`${AUTH_URL}/auth/saveuser`)
    //dispatch({type: 'SAVE_USER', user : newUser });
    return (dispatch)=>{
       // dispatch({type: 'SAVE_USER', user : newUser.user });

                axios.post(`${AUTH_URL}/auth/saveuser`,newUser)
                    .then(res=>{
                            console.log('Done User Save')
                            console.log(res)
                            fetchAllUsers({clnt:4500,lang:'EN'})
                           // dispatch({type: 'RESET_FORM', payload :{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'}});
                   
                        })
                     .catch(err=>{
                        console.log('Error User Save')
                        console.log(res)
                        dispatch({type: 'RESET_FORM', payload :newUser});
                   

                     })   ;
            }
}


export { fetchAllUsers ,saveUser ,saveOrUpdateRoute}