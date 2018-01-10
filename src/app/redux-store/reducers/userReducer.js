
const userReducer = (state={
    username : 'Max' ,
    age : 25 ,
    email : 'max@itss.com'
} , action)=>{
    switch (action.type) {

        case 'CHANGE_NAME': state = {...state ,
                              username : action.value 
                            }                         
                            ; break;
        case 'CHANGE_AGE': state = {...state ,
                     age : action.value };

            break;
    }

    return state;



}

export default userReducer;