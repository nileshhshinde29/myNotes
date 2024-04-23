import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Greet from './components/Greet';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      Learn React
      <Counter initialCount={0} />
      <TodoList />
      <Greet />
      <Skills />
    </div>
  );
}

export default App;
