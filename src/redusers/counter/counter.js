const initiState={
    counter:0
}
// reducer 
export default function counter(state=initiState,{type,payload}){

    switch(type){
        case 'INCRESE':
            return{counter:state.counter + 1}

            case 'DECRESE':
                return {counter:state.counter - 1}

                case 'RESET':
                  return{  counter: 0}

                  default:
                      return state
    }
}

// Actions

export const incCount =(payload)=>{
    return{
        type:'INCRESE',
        payload:payload,
    }
} 


export const decCount =(payload)=>{
    return{
        type:'DECRESE',
        payload:payload
    }
}

export const resetCount =()=>{
    return{
        type:'RESET'
    }
}