import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
       super(props);
       this.state = {
           searchText: ''
       };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }
    render(){
        return (
            <form>
                <div class="form-grp">
                    <input type="text" name="searchText" class="form-control" placeholder="search" value={this.state.searchText} onChange={this.handleChange}/>
                </div>
                <div class="checkbox pull-right">
                    <label><input type="checkbox"/> Only show in stock </label>
                </div>
                <div class="clearfix"></div>
            </form>
        );
    }
}

export default SearchBar;