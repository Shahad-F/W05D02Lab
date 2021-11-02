 
import './App.css';
 
import { useDispatch,useSelector} from 'react-redux'
import axios from 'axios';

import {addUser} from './redusers/user/user'

//import for counter 
import { incCount,decCount,resetCount } from './redusers/counter/counter';
//for action
import { addTodos, addTodo, removeTodo } from './redusers/todos/todos';
import { useEffect ,useState } from 'react';


export default function App (){

   const [todo ,setTodo]=useState()
   const[user ,setUser]=useState();
   const dispatch =useDispatch()

const state=useSelector((state)=>{


  return{
    todos:state.todos.todos,
    user:state.user.user,
    counter:state.counter,
  }
})

// send dispatch
const addNewUser = () => {
  dispatch(addUser(user))
}

const addTodo=()=>{
  const todo={}
  dispatch(addTodo(todo))
}

const INC =()=>{dispatch(incCount(10))}
const DEC =()=>{dispatch(decCount(10))}
const RESET =()=>{dispatch(resetCount())}




useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then((res)=>{
    dispatch(addTodo(res.data))
  })
  .catch((err)=>{
    console.log(err)
  })
},[])
  return (
     <>
     <h2>Lab 2</h2>
     <h2>Use Redux with Axios </h2>

<div>

  <h2>{state.counter}</h2>
  <button onClick={INC} > + </button>
  <button onClick={DEC} > - </button>
  <button onClick={RESET} > Reset </button>
</div>



      <div>
<h2>{state.user}</h2>
<input onChange={(e)=> {setUser(e.target.value)}}></input>
 <button onClick={addNewUser}>Change user name</button>


      </div>


      {state.todos.map((elm)=>{

        return(
          <>
         <p>{elm.id} 
         <br>
           {elm.title.toUpperCase()}
         </br></p>  
         <button onClick={()=>{dispatch(removeTodo(elm))}}> Remove</button>
          </>
        )
      })}
     </>
  );
}


 
