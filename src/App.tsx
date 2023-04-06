import { Header } from './components/Header'
import { NewTask } from './components/TasksList'
import './App.module.css'
import './global.css';
import { PlusCircle } from "phosphor-react";
import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />
      <NewTask />
    </div>
  )
}

export default App
