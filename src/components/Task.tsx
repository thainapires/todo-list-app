import styles from './Task.module.css'
import { PlusCircle } from "phosphor-react";
import clipboard from './../assets/clipboard.svg'
import { Check, Trash } from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

interface TaskInferface {
  content: string;
  isComplete: boolean;
}

export function Task({content, onDeleteTask}: TaskProps){

  function handleDeleteTask(){
    onDeleteTask(content);
  }

  const isComplete = false;

    return (
        <div className={styles.taskContent}>
          <div className={styles.checkbox}>
            <input
              title='checkbox'
              type="checkbox"
              checked={isComplete}
            />
            <div />
            <label>
              <Check size={"1rem"} weight="bold" />
            </label>
          </div>
          <p className={`${isComplete ? styles.complete : ""}`}>{content}</p>
 
          <button onClick={handleDeleteTask} title="Deletar comentário">
            <Trash size={20} />
          </button>
        </div>
    );
}