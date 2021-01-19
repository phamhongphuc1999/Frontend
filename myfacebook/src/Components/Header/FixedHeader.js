import React, {Component} from 'react';
import ListItemHeader from "./ListItemHeader";

class FixedHeader extends Component {
    render() {
        return (
            <div className={"fixed-header"}>
                <a className="facebook-icon-link" href="#">
                    <span className="facebook-icon-span"><i className="fa fa-facebook-official"></i></span>
                </a>
                <div className="search-area">
                    <div className="search-area-main">
                        <span className="search-cancel"><i className="fas fa-angle-double-left"></i></span>
                        <span><i className="fas fa-search search-icon"></i></span>
                        <input className="search-input" type="text" placeholder="Search Facebook"
                               onFocus="searchFocus()"
                               onBlur="searchBlur()"/>
                    </div>
                    <div className="search-area-extend">
                        No recent search
                    </div>
                </div>
                <ul className="main-header">
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-home"} tipText={"Home"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-user-friends"} tipText={"Friends"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-play"} tipText={"Watch"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-map-marker-alt"} tipText={"Marketplace"}></ListItemHeader>
                    <ListItemHeader itemClass={"header-item"} iconClass={"fas fa-users"} tipText={"Groups"}></ListItemHeader>
                </ul>
                <div className="avatar-icon">
                    <div className="avatar-icon-container">
                        <img src={require('../../images/avatar.jpg')} alt="avatar"/>
                        <p>Phúc</p>
                    </div>
                </div>
                <div className="extend-header-item">
                    <ul className="extend-header-item-ul">
                        <ListItemHeader itemClass={"extend-item"} iconClass={"fas fa-plus"} tipText={"Create"}></ListItemHeader>
                        <ListItemHeader itemClass={"extend-item"} iconClass={"fab fa-facebook-messenger"} tipText={"Messenger"}></ListItemHeader>
                        <ListItemHeader itemClass={"extend-item"} iconClass={"fas fa-bell"} tipText={"Notifications"}></ListItemHeader>
                        <ListItemHeader itemClass={"extend-item"} iconClass={"fa fa-user-circle-o"} tipText={"Accounts"}></ListItemHeader>
                    </ul>
                    <div className="header-extend-box" id="account-header">
                        <div className="header-extend-box-items">
                            <div className="see-profile">
                                <div className="header-extend-box-avatar">
                                    <img src="./resources/images/avatar.jpg" alt="avatar"/>
                                </div>
                                <div className="header-extend-box-info">
                                    <div className="facebook-text">Phạm Phúc</div>
                                    <div className="normal-text">See your profile</div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row-setting">
                                <span><i className="fa fa-comments-o"></i></span>
                                <div className="header-extend-box-info">
                                    <div className="facebook-text">Give Feedback</div>
                                    <div className="normal-text">Help us improve the new Facebook</div>
                                </div>
                            </div>
                            <hr/>
                            <div className="setting">
                                <div className="row-setting arrow">
                                    <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                                    <div className="text-area">Settings & Privacy</div>
                                </div>
                                <div className="row-setting arrow">
                                    <span><i className="fas fa-question-circle"></i></span>
                                    <div className="text-area">Help</div>
                                </div>
                                <div className="row-setting arrow">
                                    <span><i className="fas fa-moon"></i></span>
                                    <div className="text-area">Display & Accessibility</div>
                                </div>
                                <div className="row-setting arrow">
                                    <span><i className="fas fa-sign-out-alt"></i></span>
                                    <div className="text-area">Log Out</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FixedHeader;
