import React from 'react'

import styles from "../Item/Item.module.css";


const item = ({tasks, deleteTask}) => {
  return (
    <div className={styles.items}>
        {tasks.length > 0 && <h5>All Tasks</h5>}
        <ul>
            {tasks.map((task)=>
             <li>
             <span>{task}</span>
             <i 
             class="fa-solid fa-trash" 
             onClick={() =>{
              deleteTask(task)
             }}
             style={{color: "#1E9A6E"}}
             ></i>
         </li>
            )}
           
        </ul>
    </div>
  )
}

export default item