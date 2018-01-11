
const userFormReducer = (state={
    user : {  age :20 , username : 'Sanjay Patil' ,email :'sanjay@gmail.com'},
    userList :[]
} , action)=>{
    switch (action.type) {

        case 'SAVE_USER': state = {...state ,
                              userList : [...state.userList ,state.user ] 
                            }                         
                            ; break;
        
    }

    return state;



}

export default userFormReducer;