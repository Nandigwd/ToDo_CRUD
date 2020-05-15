 import React,{Fragment,useEffect,useState} from 'react';

 // componenet edit

 import EditTodo from "./editTodo";



const ListTodo = props =>{

    const [todos, settodos] = useState([]);

    // getall fuction 
    const getTodos = async()=>{
        try {
            const responce =await fetch ("http://localhost:5000/todos"); // by default fetch make get request
            const jsondata = await responce.json();
            settodos(jsondata);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(()=>{
        getTodos();
    }, []);

    // delete todod
    const deleteTodo = async t_id =>{
        try {
            const delete_todo = await fetch(`http://localhost:5000/todos/${t_id}`,{
            method :"DELETE"} );
            // settodos(todos.filter(todo => todo.id !== t_id));
            window.location= "/";
            console.log(delete_todo);
        } catch (err) {
            console.log(err);
        }
    }


return (
    <Fragment>
    
    <table className="table center mt-5">
    <thead>
    <tr>
      <th scope="col">Diescription </th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>

    <tbody>
        {todos.map( r_data => (
               <tr key={r_data.id}>
                <td>{r_data.description}</td>
                <td><EditTodo r_data={r_data}/></td>
                <td><button className="btn btn-danger" onClick={()=> deleteTodo(r_data.id)} >Delete</button></td>
              </tr>

        ))}
    </tbody>
    </table>
    
    </Fragment>);

 }

 export default ListTodo;