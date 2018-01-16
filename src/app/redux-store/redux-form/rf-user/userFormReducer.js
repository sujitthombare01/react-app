import _ from 'lodash';


const userFormReducer = (state={
    user : {  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create',isEdit : false},
    userList :[]
} , action)=>{
    switch (action.type) {

        case 'SAVE_USER':
        console.log('******************************************************************')
        console.log(state.user.tcode)
        if(state.user.tcode==='create')
                     state = {...state ,  userList : [...state.userList ,action.user ] }    
            else
            {console.log('Update...!')
            var newArray =[]
            console.log(state.userList)
            state.userList.map(function(user){
                if(user.user.username===action.user.user.username)
                newArray.push({user:action.user.user})
                else
                newArray.push({user:user.user})
            })
            console.log(newArray)
            state = {...state ,    user : {  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'},userList:newArray}

        }

         
             
                             break;
        case 'DELETE_USER' :
    
                    var newArray =[];
                    state.userList.map(function(user){
                        if( user.user.username!= action.value) newArray.push(user);
                    })

                  state = {...state,userList:newArray }
        break;

        case 'FETCH_USER' :
                    var newUser={};
                    state.userList.map(function(user){
                        if( user.user.username=== action.value) newUser=user.user;
                    })
                    newUser.tcode ='update';
                    state = {...state, user : newUser  };
                // dispatch(reset('UserForm'));
                    break;
         case 'RESET_FORM' :
         state= {...state, user:{  age :'' , username : '',firstName: '', lastName : '' ,email :'',tcode :'create'}}
         
         break;

    }

    return state;



}

export default userFormReducer;