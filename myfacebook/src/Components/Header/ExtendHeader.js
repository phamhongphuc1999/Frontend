import React, {Component} from 'react';
import ListItemHeader from "./ListItemHeader";

class ExtendHeader extends Component{
    render() {
        return(
            <div className="extend-header-item">
                <ul className="extend-header-item-ul">
                    <ListItemHeader itemClass={"extend-item"} iconClass={"fas fa-plus"} tipText={"Create"}></ListItemHeader>
                    <ListItemHeader itemClass={"extend-item"} iconClass={"fab fa-facebook-messenger"} tipText={"Messenger"} number={1}></ListItemHeader>
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
        )
    }
}

export default ExtendHeader;
