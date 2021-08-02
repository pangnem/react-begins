import './App.css';
import { ProductGrid } from './product-grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopper's Universe</h1>
        <div className="column-md6">
          <ProductGrid />
        </div>
      </header>
    </div>
  );
}

export default App;
