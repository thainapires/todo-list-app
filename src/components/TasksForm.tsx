import styles from './TasksForm.module.css'
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import clipboard from './../assets/clipboard.svg'
import { Task } from './Task'

export function TasksForm(){

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
    );
}