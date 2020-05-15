import React, {Fragment, useState} from "react";

const EditTodo = ({r_data}) => {

const [description, setdescription]= useState(r_data.description);

    // Edit Todo

    const editTodo = async e =>{
        try {
            const body = { description};
            const edit_todo = await fetch(`http://localhost:5000/todos/${r_data.id}`, {
                method :"PUT",
                headers : { "Content-Type":"application/json"},
                body :JSON.stringify(body)
            });  
            window.location= "/";
        } catch (err) {
            console.error(err);
        }

    }

return(
    <Fragment>
        <button type="button" className="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${r_data.id}`}

        >    
        Edit 
        </button>

        {/* id = id2 */}

        <div className="modal" id={`id${r_data.id}`}   onClick = { e => setdescription(r_data.description)}>
            <div className="modal-dialog">
                <div className="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal" 

                    onClick = { e => setdescription(r_data.description)}
                    
                    >&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                    <input type="text" 
                    className="form-control" 
                    value = {description}
                    onChange = {(e)=> setdescription(e.target.value) }
                />
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal"
                    onClick = {(e)=>editTodo(e) }
                        >Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal"
                    onClick = { e => setdescription(r_data.description)}
                    >Close</button>
                </div>

                </div>
            </div>
            </div>
    </Fragment>
);

}

export default EditTodo;