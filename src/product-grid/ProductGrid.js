import './ProductGrid.css';
import React, {useEffect, useState} from 'react';
import {CategoryProductList} from './CategoryProductList';

export function ProductGrid() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState([false]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('data/products-data.json')
      .then((res) => res.json())
      .then(result => {
          const categories = [];

          result.forEach((prod) => {
            const {category} = prod;
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(prod);
          });

          setError(null);
          setLoaded(true);
          setCategories(categories);
        }, (error) => {
          setError(error);
          setLoaded(false);
          setCategories(categories);
        },
      );
  }, [])

  return (
    <>
      {error &&
        <div className="alert alert-danger" role="alert">
          Error occurred...
        </div>
      }
      {loaded &&
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
          </thead>
          <tbody>
          {Object.keys(categories).map((category) =>
            <CategoryProductList
              key={category}
              category={category}
              products={categories[category]}/>
          )}
          </tbody>
        </table>
      }
    </>
  );
}
