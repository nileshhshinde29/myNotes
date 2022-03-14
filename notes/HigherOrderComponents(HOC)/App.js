import './App.css';
import WarrapedComponent1 from './WarrapedComponent1';
import WrappedComponent2 from './WrappedComponent2';
function App() {
  return (
    <div className="App">
      <WarrapedComponent1 name="Hello"/>
      <WrappedComponent2 name ="hii"/>
    
    </div>
  );
}

export default App;
