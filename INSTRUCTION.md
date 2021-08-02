# react-begins

## Lab 5

- ProductGrid 컴포넌트 상단에 체크박스를 추가하고, 체크박스가 선택되면, stocked=true 인
  제품들만 목록에 표시할 것.

- 예제 솔루션:

```
import './ProductGrid.css';
import React from 'react';
import { CategoryProductList } from './CategoryProductList';

export class ProductGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null, loaded: false, categories: [], inStockOnly: false };

        this.handleOnlyProductsChange = (event) => {
            const inStockOnly = event.target.checked;
            this.setState({ inStockOnly });
        };
    }

    componentDidMount() {
        const categories = [];
        fetch('data/products-data.json')
            .then((res) => res.json())
            .then(
                (result) => {
                    result.forEach((prod) => {
                        const { category } = prod;
                        if (!categories[category]) {
                            categories[category] = [];
                        }
                        categories[category].push(prod);
                    });
                    this.setState({ error: null, loaded: true, categories });
                },
                (error) => {
                    this.setState({ error, loaded: false, categories });
                },
            );
    }

    render() {
        return(
            <>
                {this.state.error &&
                    <div className="alert alert-danger" role="alert">
                        Error occurred...
                    </div>
                }
                <form>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" 
                                   onChange={this.handleOnlyProductsChange} />
                            Only products in stock
                        </label>
                    </div>
                </form>
                {this.state.loaded &&
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
                                    products={this.state.categories[category]}
                                    inStockOnly={this.state.inStockOnly} />
                            )}
                        </tbody>
                    </table>
                }
            </>
        );
    }
}
```

```
import React from 'react';
import { ProductListItem } from './ProductListItem';

export class CategoryProductList extends React.Component {

    render() {
        const filteredProducts = this.props.inStockOnly
            ? this.props.products.filter((product) => product.stocked)
            : this.props.products;
        return (
            <>
                <tr className="category">
                    <td colSpan="2">{this.props.category}</td>
                </tr>
                {filteredProducts.map((product) => 
                    <ProductListItem key={product.name} product={product} />
                )}
            </>
        );
    }
}
```

```
import React from 'react';

export class ProductListItem extends React.Component {

    render() {
        return (
            <tr key={this.props.product.name}>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}
```

- Also you can add a text box for filtering by product name.
