import React, { Component } from 'react';
import ProductRow from './ProductRow';
import TableHeaders from './TableHeader';

class ProductList extends Component{
    render(){
        let productsAsArray = Object.keys(this.props.products).map((id) => this.props.products[id]);
        let rows = [];

        productsAsArray.forEach((product) => {
            rows.push(
                <ProductRow product={product} key={product.id} ></ProductRow>
            );
        });

        return (
            <table class="table margin-top-medium">
                <thead>
                    <TableHeaders column="name"/>
                    <TableHeaders column="price" textAlign="text-right"/>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductList;