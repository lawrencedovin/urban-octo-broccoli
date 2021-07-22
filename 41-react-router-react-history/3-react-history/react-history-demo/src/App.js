import Counter from './Counter';
import CounterClassBinding from './CounterClassBinding';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter color="purple"/> */}
      <CounterClassBinding color="purple"/>
    </div>
  );
}

export default App;
