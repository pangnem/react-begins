import './ProductGrid.css';
import React from 'react';
import {productsData} from './products-data';

export class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: []};
  }

  componentDidMount() {
    const categories = [];
    productsData.forEach(prod => {
      const {category} = prod;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(prod);
    });
    this.setState({categories});
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
        {Object.keys(this.state.categories).map(category =>
          <React.Fragment key={category}>
            <tr className={"category"}>
              <td colSpan="2">{category}</td>
            </tr>
            {this.state.categories[category].map(product =>
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
