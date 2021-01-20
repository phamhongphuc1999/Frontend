import React, {Component} from 'react';

class ListItemHeader extends Component{
    render() {
        return(
            <li className={this.props.itemClass}>
                <span><i className={this.props.iconClass} id={this.props.itemId}></i></span>
                <div className="tooltip">{this.props.tipText}</div>
                <div className="number-message">{this.props.number}</div>
            </li>
        )
    }
}

export default ListItemHeader;
