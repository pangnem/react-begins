# react-begins

## Lab 4

- public/data/products-data.json 파일을 추가하고, 아래 내용을 넣을 것.

```
[
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
]
```

- 브라우저에서 http://localhost:3000/data/products-data.json 을 방문하여 JSON 데이터가 표시되는지 확인.

- ProductGrid 컴포넌트를 개선하여, "data/products-data.json" URL을 fetch하여 데이터를 읽도록 변경할 것.

- 예제 솔루션:

```
import './ProductGrid.css';
import React from 'react';
import { CategoryProductList } from './CategoryProductList';

export class ProductGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null, loaded: false, categories: [] };
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
                                    products={this.state.categories[category]} />
                            )}
                        </tbody>
                    </table>
                }
            </>
        );
    }
}
```
