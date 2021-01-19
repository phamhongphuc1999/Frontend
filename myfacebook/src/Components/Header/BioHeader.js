import React, {Component} from 'react';

class BioHeader extends Component{
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
                        <div className="main-area">
                            <div className="common-item active">Posts</div>
                            <div className="common-item item">About</div>
                            <div className="common-item item">Friends</div>
                            <div className="common-item item">Photos</div>
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