import React, {Component} from 'react';

class BioHeader extends Component{
    constructor(props) {
        super(props);

        this.clickItemEvent = this.clickItemEvent.bind(this);
    }

    clickItemEvent(e){
        let currentTarget = this.mainArea.querySelector('.active');
        currentTarget.classList.remove('active');
        currentTarget.classList.add('item');

        let target = e.target;
        target.classList.add('active');
        target.classList.remove('item');
    }

    render() {
        return(
            <div className={"bio-header"}>
                <div className="bio-image">
                    <img src="./resources/images/bio.jpg" alt="bio-image" />
                    {/*<div class="avatar-bio"></div>*/}
                    {/*<div class="edit-cover-photo">*/}
                    {/*    <span><i class="fa fa-camera" aria-hidden="true"></i></span>*/}
                    {/*    Edit Cover Photo*/}
                    {/*</div>*/}
                </div>
                <div className="bio-info">
                    <div className="text-area">Phạm Phúc</div>
                    <div className="add-bio">
                        <div>Add Bio</div>
                    </div>
                </div>
                <hr/>
                <div className="other-menu">
                    <div className="other-main-menu">
                        <div className="main-area" ref={c => (this.mainArea = c)}>
                            <div className="common-item active" onClick={this.clickItemEvent}>Posts</div>
                            <div className="common-item item" onClick={this.clickItemEvent}>About</div>
                            <div className="common-item item" onClick={this.clickItemEvent}>Friends</div>
                            <div className="common-item item" onClick={this.clickItemEvent}>Photos</div>
                            <div className="common-item item dropdown-item">More</div>
                        </div>
                    </div>
                    <div className="other-icon">
                        <div className="main-icon">
                            <div className="icon-item">
                                <div>
                                    <span><i className="fas fa-pencil-alt"></i></span>
                                    Edit Profile
                                </div>
                            </div>
                            <div className="icon-item">
                                <span><i className="fas fa-eye"></i></span>
                            </div>
                            <div className="icon-item">
                                <span><i className="fas fa-search"></i></span>
                            </div>
                            <div className="icon-item">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BioHeader;