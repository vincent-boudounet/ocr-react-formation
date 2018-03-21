import React from 'react';

class ProductForm extends React.Component {
    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" name="category" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" name="price" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>In stock</label>
                    <input type="text" name="stocked" class="form-control"/>
                </div>
                <input type="submit" value="Save" class="btn btn-primary pull-right"/>
            </form>
        );
    }
}

export default ProductForm;