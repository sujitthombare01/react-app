import axios from 'axios';
import _ from 'lodash';

import {AUTH_URL} from '../../../../components/components-lib/URL_DETAILS';

const fetchAllUsers =(data)=>{
console.log('Fetch All user')
            return (dispatch)=>{
            
            
             fetchUsersFunc(data,dispatch)
            }
};

const fetchUsersFunc =(data,dispatch)=>{

    console.log('Fetch all user function')

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

const saveOrUpdateRoute=(history,url,tcode,userid)=>{

    return (dispatch)=>{
            if(tcode==='create')
                {
                    dispatch({type: 'RESET_FORM', payload :{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'}});
                    history.push(`${url}/save`)
                }
            else if(tcode==='update')
                {
                    dispatch({type: 'RESET_FORM', payload :{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'}});
                    history.push(`${url}/save/${userid}`)
                }


    }

}


const userTransations = (newUser)=> {  
    console.log('Action userTransations')

    return (dispatch)=>{
 

                axios.post(`${AUTH_URL}/auth/saveuser`,newUser)
                    .then(res=>{
                            console.log('Done User Transation')
                            console.log(res)
                            fetchUsersFunc({clnt:4500,lang:'EN'},dispatch)
                          
                        })
                     .catch(err=>{
                        console.log('Error User Transation')
                        console.log(res)
                        dispatch({type: 'RESET_FORM', payload :newUser});
                   

                     })   ;
            }
}


export { fetchAllUsers ,userTransations ,saveOrUpdateRoute}