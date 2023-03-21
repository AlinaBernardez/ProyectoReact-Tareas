// import logo from './logo.svg';
import './App.css';
// import Father from './Components/Container/father';
// import ComponenteContexto from './Hooks/ejemplo3';
import TaskListComponent from './Components/Container/task_list';
import LoginFormik from './Components/Pure/Forms/loginFormik';
// import GreetingStyled from './Components/Pure/greetingStyled';



function App() {
  return (
    <div className="App">
      <TaskListComponent/>
      <LoginFormik/>
    </div>
  );
}

export default App;
