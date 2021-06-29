import items from './Items';
import ShoppingCart from './ShoppingCart';
import './App.css';

function App() {
  return (
    <div>
      <ShoppingCart items={items} />
      <ShoppingCart items={items} />
    </div>
  );
}

export default App;