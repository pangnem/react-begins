# react-begins

## Lab 3

- src/product-grid 폴더를 만들고, ProductGrid.* 파일들을 그 폴더로 이동할 것.

- 브라우저 화면에서 컴파일 오류 시, 컴파일 오류를 수정할 것.

- src/product-grid/index.js 파일을 아래 내용을 추가할 것.

```
export * from './ProductGrid';
```

- src/App.js에서 ProductGrid 임포트 문을 아래와 같이 변경할 것.

```
import { ProductGrid } from './product-grid';
```

- public/data/products-data.js 파일을 아래 내용으로 추가.

```
export var productsData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

- ProductGrid 클래스를 아래와 같이 변경

```
import './ProductGrid.css';
import React from 'react';
import { productsData } from './products-data';

export class ProductGrid extends React.Component {

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData.map((product) => (
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
```

- 브라우저로 변경 사항 확인.

- 위에서 문제점은 카테고리 이름 행이 제대로 표시되고 있지 않다는 것.
  이를 개선해 보라.

  아래와 같은 데이터 초기화 참조:

```
    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        const categories = [];
        productsData.forEach((prod) => {
            const { category } = prod;
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(prod);
        });
        this.setState({ categories });
    }
```

- 아래 예제 코드 참조:

```
import './ProductGrid.css';
import React from 'react';
import { productsData } from './products-data';

export class ProductGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        const categories = [];
        productsData.forEach((prod) => {
            const { category } = prod;
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(prod);
        });
        this.setState({ categories });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.state.categories).map((category) =>
                        <React.Fragment key={category}>
                            <tr className="category">
                                <td colSpan="2">{category}</td>
                            </tr>
                            {this.state.categories[category].map((product) =>
                                <tr key={product.name}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )}
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        );
    }
}
```

- 다음으로는, 카테고리 별 제품 목록 블록 (즉, React.Fragment 안의 내용) 을 별도 컴포넌트로
  분리하고 (예: CategoryProductList.js 클래스),
  ProductGrid 클래스에서 그 새로운 컴포넌트를 호출하고 카테고리별 제품 리스트를
  props로 전달하여 렌더링하는 방식으로 개선할 것.

- 예제 솔루션) ProductGrid.render() 메소드를 아래와 같이 변경

```
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.state.categories).map((category) =>
                        <CategoryProductList
                            key={category}
                            category={category}
                            products={this.state.categories[category]} />
                    )}
                </tbody>
            </table>
        );
    }
```

    그리고 CategoryProductList 클래스를 아래와 같이 작성

```
import './ProductGrid.css';
import React from 'react';

export class CategoryProductList extends React.Component {

    constructor(props) {
        super(props);
        const { category, products } = props;
        this.category = category;
        this.products = products;
    }

    render() {
        return (
            <>
                <tr className="category">
                    <td colSpan="2">{this.category}</td>
                </tr>
                {this.products.map((product) =>
                    <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )}
            </>
        );
    }
}
```
