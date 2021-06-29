import items from './Items';
import ShoppingCart from './ShoppingCart';
import './App.css';

function App() {
  return (
    <div>
      <ShoppingCart items={items} username="lawrence" />
      <ShoppingCart items={items} username="anonymous" />
    </div>
  );
}

export default App;