import React, { Fragment, useState } from  'react'; 

const InputTodo = props  => {

    // state  declaration inside funtion 
    const [description , setdiscription] =  useState("");   


    const onsubmitform = async (e) => {
        e.preventDefault();
        try {
            const body = { description};
            const response = await fetch("http://localhost:5000/todos",{
                method : "POST",
                headers : { "Content-Type":"application/json"},
                body :JSON.stringify(body)
            });
            window.location= "/";
            
        } catch (err) {
            
        }
    }

    return( 
        <Fragment>
            <h1 className ="text-center mt-5"> INPUT TODO LIST</h1>
            <form className="d-flex mt-5" onSubmit={onsubmitform}>
                <input type="text" 
                className="form-control" 
                value={description} 
                onChange={ e=>{setdiscription(e.target.value  )}} />
                <button className= "btn btn-success">ADD</button> 
            </form>
        </Fragment>
    );

}; 

export default InputTodo;