import React, {useState} from 'react';
import styles from "./Todo.module.css";

import Item from '../components/Item/Item';

const Todo = () => {

let data = JSON.parse(localStorage.getItem("tasks")) || [];

const[tasks, setTasks] = useState(data);
const[inputTxt, setInputTxt] = useState("");

const handleClearAll = ()=> {
  setTasks([]);
  localStorage.setItem("task",JSON.stringify([]));
};

const handleAddTask = (e) =>{
  e.preventDefault();

  let task = {
    id:new Date(),
    title: inputTxt,
  };

  const newList = [...tasks,task];

  setTasks(newList);
  setInputTxt("")

  localStorage.setItem("task",JSON.stringify(newList));
};

const handleDelete = (id)=>{
  const filterTasks = tasks.filter((task)=> task.id !==id);

  setTasks(filterTasks);
  localStorage.setItem("task",JSON.stringify(filterTasks));
}

  return (
    <div className={styles.mainContainer}>

        <div className={styles.box}>
        <h1>Make your To-Do List 📝  </h1>
        <div>
            <p>Add your items here ✍️</p>
            <form className={styles.form} onSubmit={handleAddTask}>
                <input type="text" 
                placeholder='Your Item'
                value={inputTxt}
                onChange={(e)=> setInputTxt(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
        {/* All Tasks */}
            <Item tasks={tasks} deleteTask ={handleDelete}/>
        {/* Clear all button */}

        {tasks.length > 0 &&(
        <button className={styles.clearAll}
          onClick={handleClearAll}
        >Clear All</button>
        )}
        </div>
    </div>
  )
}

export default Todo