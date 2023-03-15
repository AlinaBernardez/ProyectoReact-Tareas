// import logo from './logo.svg';
import './App.css';
// import Father from './Components/Container/father';
// import ComponenteContexto from './Hooks/ejemplo3';
import TaskListComponent from './Components/Container/task_list';
import OptionalRender from './Components/Pure/optionalRender';
// import GreetingStyled from './Components/Pure/greetingStyled';



function App() {
  return (
    <div className="App">
      <TaskListComponent/>
      <OptionalRender/>
    </div>
  );
}

export default App;
