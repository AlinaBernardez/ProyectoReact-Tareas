// import logo from './logo.svg';
import './App.css';
// import Father from './Components/Container/father';
// import ComponenteContexto from './Hooks/ejemplo3';
import TaskListComponent from './Components/Container/task_list';
import ComponenteRectangulo from './Components/Pure/ejercicio101112';
import OptionalRender from './Components/Pure/optionalRender';
// import GreetingStyled from './Components/Pure/greetingStyled';



function App() {
  return (
    <div className="App">
      <TaskListComponent/>
      <OptionalRender/>
      <ComponenteRectangulo/>
    </div>
  );
}

export default App;
