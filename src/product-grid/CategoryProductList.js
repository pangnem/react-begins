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
