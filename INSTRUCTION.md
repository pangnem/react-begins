# react-begins

## Lab 2

- Add the following into public/index.html:

```
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
```

- App 함수를 아래와 같이 교체

```
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
```

- 화면에서 제품 목록 테이블이 잘 보여지는지 확인.

- ProductGrid.js 파일을 추가하고, 아래와 같이 내용을 넣을 것.

```
import React from 'react';

export class ProductGrid extends React.Component {

    render() {
        return (
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr class="category">
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
                <tr class="category">
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
        );
    }
}
```

- App.js는 아래와 같이 변경

```
import './App.css';
import { ProductGrid } from './ProductGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopper's Universe</h1>
        <div class="column-md6">
          <ProductGrid />
        </div>
      </header>
    </div>
  );
}

export default App;
```

- 화면에서 제품 목록 테이블이 그대로 잘 보여지는지 확인.

- 카테고리 행(Sporting Goods, Electronics)들이 다르게 보일 수 있도록, ProductGrid.css 파일을 아래 예와 같이 추가.

```
.category {
  background-color: darkgray;
}
```

- ProductGrid.js에서 css 파일 임포트 추가

```
import './ProductGrid.css';
```

- 화면에서 제품 목록 테이블과 카테고리 행(Sporting Goods, Electronics)들이 다르게 보이는지 확인.