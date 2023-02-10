import styles from './Header.module.css'
import toDoListLogo from '../assets/toDo-list-logo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={toDoListLogo} alt="Logotipo do ToDo List"/>
        </header>
    );
}