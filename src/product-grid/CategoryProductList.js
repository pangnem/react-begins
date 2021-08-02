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
