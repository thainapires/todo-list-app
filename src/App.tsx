import { Header } from './components/Header'
import { TasksForm } from './components/TasksForm'
import './App.module.css'
import './global.css';
import { PlusCircle } from "phosphor-react";
import styles from './App.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import clipboard from './assets/clipboard.svg'
import { Task } from './components/Task'
import { TasksEmpty } from './components/TasksEmpty'

interface TaskInferface {
  content: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState(['teste']);

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
      event.preventDefault()
      /*const newTask = {
        content: newTaskText,
        isComplete: false,
      };*/
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
            <strong className={styles.createdTasks}>Tarefas criadas <span> 0</span></strong>
            <strong className={styles.doneTasks}>Concluídas <span> 0 de 0</span></strong>
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
