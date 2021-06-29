import logo from './logo.svg';
import './App.css';
import {add, multiply} from './helpers.js';
import cats from './Cats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>1 + 3 = {add(1,3)}</p>
        <p>2 * 3 = {multiply(2,3)}</p>
        <ul>
          {cats.map((cat) =><li>Name: {cat.name} Age: {cat.age}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
