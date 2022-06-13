import './ProductGrid.css';
import React from 'react';
import {CategoryProductList} from './CategoryProductList';

export class ProductGrid extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnlyProductsChange = this.handleOnlyProductsChange.bind(this);
    this.state = {error: null, loaded: false, categories: [], isStockOnly: false};
  }

  componentDidMount() {
    const categories = [];
    fetch('data/products-data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          result.forEach((prod) => {
            const {category} = prod;
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(prod);
          });
          this.setState({error: null, loaded: true, categories});
        },
        (error) => {
          this.setState({error, loaded: false, categories});
        },
      );
  }

  handleOnlyProductsChange() {
    const { isStockOnly } = this.state;

    this.setState({isStockOnly: !isStockOnly});
  }

  render() {
    return (
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
                isStockOnly={this.state.isStockOnly}
              />
            )}
            </tbody>
          </table>
        }
      </>
    );
  }
}
