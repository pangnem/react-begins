import './ProductGrid.css';
import React from 'react';

export class CategoryProductList extends React.Component {

  render() {
    return (
      <>
        <tr className="category">
          <td colSpan="2">{this.props.category}</td>
        </tr>
        {this.props.products.map((product) =>
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )}
      </>
    );
  }
}
