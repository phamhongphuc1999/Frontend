import React, {Component} from 'react';

class ListItemHeader extends Component{
    render() {
        return(
            <li className={this.props.itemClass}>
                <span><i className={this.props.iconClass}></i></span>
                <div className="tooltip">{this.props.tipText}</div>
                <div className="number-message">1</div>
            </li>
        )
    }
}

export default ListItemHeader;
