const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')


// Middleware 
app.use(cors());   // intigration b/w react port and node port
app.use(express.json()); // access to req.body  


// ROUTES //

// Create a todo 
app.post('/todos', async(req, res, next )=>{
    try {
        const { description } = req.body;
        const newtodo = await pool.query("insert into pern_stack.todo (description) VALUES ($1) returning * ", [description]);
        res.json(newtodo.rows);
    } catch (err) {
        console.error(err);
    }
});

//get all todos
app.get('/todos',async (req,res,next)=>{
    try {
        const getalltodo =  await pool.query("SELECT * FROM pern_stack.todo");
        res.json(getalltodo.rows);
    } catch (err) {
        console.error(err);
    }
});

// get a todo
app.get('/todos/:id', async(req,res,next)=>{
    try {
        const {id} = req.params;
        console.log(id);
        const getiddata= await pool.query("Select * from pern_stack.todo where id = $1", [id]);
        res.json(getiddata.rows);
        
    } catch (err) {
        console.error(err);
    }
});

// update a todo
app.put('/todos/:id', async(req, res, next)=>{
    try {
    const { id } = req.params;
    const { description } = req.body;
    const updattodo = await pool.query(" update pern_stack.todo SET description = $1 where id = $2",[ description, id ]);
    res.json('SUCCEFULLY updated ');
    } catch (err) {
        console.error(err);
    }
    
});

// delete a todo 
app.delete('/todos/:id', async(req,res,next)=>{
    try {
        const {id} = req.params;
        const delettodo = await pool.query(" delete from pern_stack.todo where id = $1",[id]);
        res.json('Sucessfully Deleted ');
    
    } catch (err) {
        console.error(err);
        
    }
});


app.listen(5000, () => {
    console.log('Server has started on port 5000 ');
});
