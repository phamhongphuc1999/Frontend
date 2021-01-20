import React, {Component} from 'react';
import ListItemHeader from "./ListItemHeader";

class ExtendHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            plus: {display: 'none'},
            messenger: {display: 'none'},
            notification: {display: 'none'},
            account: {display: 'none'}
        }

        this.listItemHeaderClick = this.listItemHeaderClick.bind(this);
    }

    listItemHeaderClick(e){
        let targetId = e.target.id;
        if(targetId == 'plus'){
            this.setState({
                plus: {display: 'inline'},
                messenger: {display: 'none'},
                notification: {display: 'none'},
                account: {display: 'none'}
            })
        }
        else if(targetId == 'messenger'){
            this.setState({
                plus: {display: 'none'},
                messenger: {display: 'inline'},
                notification: {display: 'none'},
                account: {display: 'none'}
            })
        }
        else if(targetId == 'notification'){
            this.setState({
                plus: {display: 'none'},
                messenger: {display: 'none'},
                notification: {display: 'inline'},
                account: {display: 'none'}
            })
        }
        else if(targetId == 'account'){
            this.setState({
                plus: {display: 'none'},
                messenger: {display: 'none'},
                notification: {display: 'none'},
                account: {display: 'inline'}
            })
        }
        else{
            this.setState({
                plus: {display: 'none'},
                messenger: {display: 'none'},
                notification: {display: 'none'},
                account: {display: 'none'}
            })
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.listItemHeaderClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.listItemHeaderClick)
    }

    render() {
        return(
            <div className="extend-header-item">
                <ul className="extend-header-item-ul">
                    <ListItemHeader itemClass={"extend-item"} itemId={'plus'} iconClass={"fas fa-plus"} tipText={"Create"}></ListItemHeader>
                    <ListItemHeader itemClass={"extend-item"} itemId={'messenger'} iconClass={"fab fa-facebook-messenger"} tipText={"Messenger"} number={1}></ListItemHeader>
                    <ListItemHeader itemClass={"extend-item"} itemId={'notification'} iconClass={"fas fa-bell"} tipText={"Notifications"}></ListItemHeader>
                    <ListItemHeader itemClass={"extend-item"} itemId={'account'} iconClass={"fa fa-user-circle-o"} tipText={"Accounts"}></ListItemHeader>
                </ul>
                <div className="header-extend-box" style={this.state.plus}>
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
                    </div>
                </div>
                <div className="header-extend-box" style={this.state.messenger}>
                    <div className="header-extend-box-items">
                        <div className="row-setting">
                            <span><i className="fa fa-comments-o"></i></span>
                            <div className="header-extend-box-info">
                                <div className="facebook-text">Give Feedback</div>
                                <div className="normal-text">Help us improve the new Facebook</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-extend-box" style={this.state.notification}>
                    <div className="header-extend-box-items">
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
                <div className="header-extend-box" style={this.state.account}>
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
