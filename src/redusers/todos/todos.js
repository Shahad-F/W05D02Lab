const initState ={
    todos:[],
}

export default function todos(state=initState,{type,payload}){


    switch(type){
        case 'ADD_TODOS':
            return{todo:payload}

            case 'ADD_TODO':
                return{todos:[...state.todos,payload]}

                case 'REMOVE_TODO':
                    return{
                        todos:state.todos.filter((elm)=>{
return elm.id !== payload.id;
                        })
                    }
                    default:
                        return state
    }
}

export const addTodos=(todos)=>{
    return{
        type:'ADD_TODOS',
        payload:todos
    }
}

export const addTodo =(todo)=>{
    return{
        type:'ADD_TODO',
        payload:todo
    }
}

export const removeTodo=(todo)=>{
    return{
        type:'REMOVE_TODO',
        payload:todo
    }
}