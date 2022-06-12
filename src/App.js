import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopper's Universe</h1>
          <div class="column-md6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">Sporting Goods</td>
              </tr>
              <tr>
                <td>Football</td>
                <td>$49.99</td>
              </tr>
              <tr>
                <td>Baseball</td>
                <td>$9.99</td>
              </tr>
              <tr>
                <td>Basketball</td>
                <td>$29.99</td>
              </tr>
              <tr>
                <td colspan="2">Electronics</td>
              </tr>
              <tr>
                <td>iPod Touch</td>
                <td>$99.99</td>
              </tr>
              <tr>
                <td>iPhone 5</td>
                <td>$399.99</td>
              </tr>
              <tr>
                <td>Nexus 7</td>
                <td>$29.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
