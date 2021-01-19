import React, {Component} from 'react';
import ListItemHeader from "./ListItemHeader";
import SearchAreaHeader from "./SearchAreaHeader";
import ExtendHeader from "./ExtendHeader";

class FixedHeader extends Component {
    render() {
        return (
            <div className={"fixed-header"}>
                <SearchAreaHeader></SearchAreaHeader>
                <ul className="main-header">
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-home"} tipText={"Home"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-user-friends"} tipText={"Friends"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-play"} tipText={"Watch"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-map-marker-alt"} tipText={"Marketplace"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-users"} tipText={"Groups"}></ListItemHeader>
                </ul>
                <div className="avatar-icon">
                    <div className="avatar-icon-container">
                        <img src={require('../../images/avatar.jpg')}/>
                        <p>Phúc</p>
                    </div>
                </div>
                <ExtendHeader></ExtendHeader>
            </div>
        )
    }
}

export default FixedHeader;
