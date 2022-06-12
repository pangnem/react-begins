import './App.css';
import {ProductGrid} from './ProductGrid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopper's Universe</h1>
        <div class="column-md6">
          <ProductGrid/>
        </div>
      </header>
    </div>
  );
}

export default App;
