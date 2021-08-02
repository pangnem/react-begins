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
