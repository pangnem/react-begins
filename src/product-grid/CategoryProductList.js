import './ProductGrid.css';
import React from 'react';

export class CategoryProductList extends React.Component {

    constructor(props) {
        super(props);
        const { category, products, isStockOnly } = props;
        this.category = category;
        this.products = products;
        this.isStockOnly = isStockOnly;
    }

    render() {
        const stockProducts = this.props.isStockOnly
          ? this.props.products.filter(product => product.stocked)
          : this.props.products;

        return (
          <>
              <tr className="category">
                  <td colSpan="2">{this.category}</td>
              </tr>
              {stockProducts.map((product) =>
                <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
              )}
          </>
        );
    }
}
