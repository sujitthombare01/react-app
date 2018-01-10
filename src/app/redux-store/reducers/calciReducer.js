
const calciReducer = (state= {
    result : 10 ,
    lastValues : []
} , action)=>{
    switch (action.type) {

        case 'ADD': state = {...state ,
                              result : state.result + action.value ,
                             
                            lastValues :[...state.lastValues , action.value]

                            }
                         
                            ; break;
        case 'SUB': state = {...state ,
            result : state.result - action.value ,
    
                             
            lastValues :[...state.lastValues , action.value]
        };

            break;
    }

    return state;



}

export default calciReducer;