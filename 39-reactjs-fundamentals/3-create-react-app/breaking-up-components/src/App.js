import items from './Items';
import ShoppingCart from './ShoppingCart';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <img src={logo} alt="logo"/>
      <ShoppingCart items={items} username="lawrence" />
      <ShoppingCart items={items} username="anonymous" />
    </div>
  );
}

export default App;