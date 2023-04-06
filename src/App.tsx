import { Header } from './components/Header'
import './App.module.css'
import './global.css';
import { PlusCircle } from "phosphor-react";
import styles from './App.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from './components/Task'
import { TasksEmpty } from './components/TasksEmpty'

interface TaskInferface {
  content: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
      event.preventDefault()
      setTasks([...tasks, newTaskText]);
      setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
      event.target.setCustomValidity('');
      setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
        return task !== taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  const numberOfTasksCreated = tasks.length;
  const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0);

  function increaceCompletedTasks(type: string){
    if(type == "sum"){
      setNumberOfTasksCompleted(numberOfTasksCompleted+1);
    }else{
      setNumberOfTasksCompleted(numberOfTasksCompleted-1);
    }
  }

  const isTasksEmpty = tasks.length == 0;

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <form className={styles.addNewtaskForm} onSubmit={handleCreateNewTask}>
              <input 
                  type="text" 
                  name="name" 
                  placeholder="Adicione uma nova tarefa"
                  value={newTaskText}
                  onChange={handleNewTaskChange}
                  required
              />
              <button type="submit">Criar<PlusCircle size={20}/></button>
        </form>

        <div className={styles.tasks_main}>
          <div className={styles.header}>
            <strong className={styles.createdTasks}>Tarefas criadas <span> {numberOfTasksCreated}</span></strong>
            <strong className={styles.doneTasks}>Concluídas <span> {numberOfTasksCompleted} de {numberOfTasksCreated}</span></strong>
          </div>
                {isTasksEmpty? (
                  <TasksEmpty/>
                ) : (
                <div></div>
                )}

                <div className={styles.tasksContainer}>
                  {tasks.map(task => {
                      return (
                      <Task
                          content={task}  
                          onDeleteTask={deleteTask}
                          increaceCompletedTasks={increaceCompletedTasks}
                      />
                      )  
                  })}
                </div>
        </div>
      </div>
    </div>
  )
}

export default App
