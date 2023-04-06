import styles from './TasksList.module.css'
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import clipboard from './../assets/clipboard.svg'
import { Task } from './Task'

export function NewTask(){

    const [tasks, setTasks] = useState([
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    ])

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

    const isTasksEmpty = tasks.length == 0;

    function deleteTask(taskToDelete: string){
      const tasksWithoutDeletedOne = tasks.filter(task => {
          return task !== taskToDelete;
      })
      setTasks(tasksWithoutDeletedOne);
  }

    return (
        <div>
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
            <div className={styles.tasks}>
                <div className={styles.header}>
                    <div className={styles.createdTasks}><strong>Tarefas criadas</strong><span>0</span></div>
                    <div className={styles.doneTasks}><strong>Concluídas</strong><span>0</span></div>
                </div>
                {isTasksEmpty? (
                <div className={styles.tasksContent}>
                    <img src={clipboard} alt="Clipboard image"/>
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                ) : (
                <div className={styles.tasksContent}>
                    
                </div>
                )}

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
    );
}