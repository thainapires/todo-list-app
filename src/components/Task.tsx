import styles from './Task.module.css'
import { PlusCircle } from "phosphor-react";
import clipboard from './../assets/clipboard.svg'
import { Circle, Trash } from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({content, onDeleteTask}: TaskProps){

  function handleDeleteTask(){
    onDeleteTask(content)
  }

    return (
        <div className={styles.task}>
          <div className={styles.taskContent}>
            <Circle size={20}/>
            <p>{content}</p>  
          </div>
          <button onClick={handleDeleteTask} title="Deletar comentário">
            <Trash size={20} />
          </button>
        </div>
    );
}