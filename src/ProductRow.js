import React, { Component } from 'react';
import './ProductRow.css'

class ProductRow extends Component{
    render(){
        return(
            <tr>
                <td className={this.props.product.stocked ? '' : 'out-of-stock'}>{this.props.product.name}</td>
                <td class="text-right">{this.props.product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;