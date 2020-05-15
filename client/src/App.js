import React, { Fragment} from 'react' ; 
import './App.css';  

// components
import Todoinput from './components/inputTodo';
import ListTodos from './components/listTodo';

function App() {
  return (
  <Fragment> 
    <div className="container">
      <Todoinput/>
      <ListTodos/>
    </div>
    </Fragment> 
  );
}


export default App;
