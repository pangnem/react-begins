import './ProductGrid.css';
import React from 'react';
import {productsData} from './products-data';
import {CategoryProductList} from './CategoryProductList';

export class ProductGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {categories: []};
  }

  componentDidMount() {
    const categories = [];
    fetch('data/products-data.json')
      .then((res) => res.json())
      .then(result => {
          result.forEach((prod) => {
            const {category} = prod;
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(prod);
          });
          this.setState({error: null, loaded: true, categories});
        }, (error) => {
          this.setState({error, loaded: false, categories});
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
