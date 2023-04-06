import styles from './Task.module.css'
import { Check, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

interface TaskInferface {
  content: string;
  isComplete: boolean;
  increaceCompletedTasks: () => void;
}

export function Task({content, onDeleteTask, increaceCompletedTasks}: TaskProps){

  function handleDeleteTask(){
    if(isComplete == true){
      increaceCompletedTasks("delete");
    }
    onDeleteTask(content);
  }

  const [isComplete, setIsComplete] = useState(false)

  const completeHandler = () => {
    if(!isComplete == true){
      increaceCompletedTasks("sum");
    }else{
      increaceCompletedTasks("delete");
    }
    setIsComplete(!isComplete)
  }

    return (
        <div className={styles.taskContent}>
          <div className={styles.checkbox}>
            <input
              title='checkbox'
              type="checkbox"
              checked={isComplete}
              onChange={completeHandler}
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