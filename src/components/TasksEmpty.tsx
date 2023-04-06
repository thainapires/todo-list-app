import styles from './TasksEmpty.module.css'
import { PlusCircle } from "phosphor-react";
import clipboard from './../assets/clipboard.svg'
import { Circle, Trash } from "phosphor-react";


export function TasksEmpty(){

    return (
      <div className={styles.tasksContentEmpty}>
        <img src={clipboard} alt="Clipboard image"/>
        <div>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
       </div>
    );
}