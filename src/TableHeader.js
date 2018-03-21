import React from 'react';

class TableHeader extends React.Component {
    render() {
        return(
            <th className={this.props.textAlign}>
                {this.props.column}
                <div class="btn-group margin-left-small">
                    <button class="btn btn-xs btn-default active"><i class="ion-arrow-down-b"></i></button>
                    <button class="btn btn-xs btn-default"><i class="ion-arrow-up-b"></i></button>
                </div>
            </th>
        );
    }
}

export default TableHeader;