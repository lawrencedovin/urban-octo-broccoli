import './App.css';
import countReducer from './countReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FirstCounter from './FirstCounter';

const store = createStore(countReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FirstCounter />
      </div>
    </Provider>
  );
}

export default App;
