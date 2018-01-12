
const userFormReducer = (state={
    user : {  age :'' , username : '',firstName: '', lastName : '' ,email :''},
    userList :[]
} , action)=>{
    switch (action.type) {

        case 'SAVE_USER':
        
                     state = {...state ,  userList : [...state.userList ,action.user ] }                         
                            ; break;
        
    }

    return state;



}

export default userFormReducer;