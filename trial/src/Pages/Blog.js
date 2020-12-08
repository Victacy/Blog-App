import React,{useState} from 'react'
import '../styles/Post.css'
import Post from '../Mblog/Post'
import Format from '../Mblog/Format'
import Filter from '../Mblog/Filter'
import { nanoid } from 'nanoid'
 

function Blog(props) {
    const [tasks, setTasks] = useState(props.tasks)

    function addTask(name){
        const newTask={id:"todo-" + nanoid(),name:name,completed:false}
        setTasks([...tasks,newTask])
    }


    function toggleTaskCompleted(id){
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
              return {...task, completed: !task.completed}
    }
                return task;
            });
            setTasks(updatedTasks);
            }

    function deleteTask(id){
        console.log(id)
    }

    const taskList=tasks.map((task) => {
        <Post 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}/>
    
    
    })

    const tasksNoun = taskList.length !==1 ? 'tasks':'task';
    const headingText=`${taskList.length} ${tasksNoun} remaining`;

    return (
        <div className="todoapp stack-large">
          <Format addTask={addTask}/>
          <div className="filters btn-group stack-exception">
              <Filter/>
              <Filter/>
              <Filter/>
            </div> 
            <h2 id="list-heading">{headingText}</h2> 
            <ul>
                {taskList}
            </ul>
        </div>
       
    
    );
  }
  

export default Blog;