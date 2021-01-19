import React, {Component} from 'react';

class SearchAreaHeader extends Component{
    constructor(props) {
        super(props);

        this.state = {
            searchIcon: { display: 'inline' },
            facebookIcon: {display: 'flex'},
            searchCancel: {display: 'none'},
            searchAreaClass: "search-area",
            searchAreaExtend: {
                display: 'none',
                marginLeft: '10px'
            }
        }

        this.searchFocus = this.searchFocus.bind(this);
        this.searchBlur = this.searchBlur.bind(this);
    }

    searchFocus(){
        this.setState({
            searchIcon: { display: 'none' },
            facebookIcon: {display: 'none'},
            searchCancel: {display: 'inline'},
            searchAreaClass: "search-area specified-search-area",
            searchAreaExtend: {
                display: 'block',
                marginLeft: '0px'
            }
        })
    }

    searchBlur(){
        this.setState({
            searchIcon: { display: 'inline' },
            facebookIcon: {display: 'flex'},
            searchCancel: {display: 'none'},
            searchAreaClass: "search-area",
            searchAreaExtend: {
                display: 'none',
                marginLeft: '10px'
            }
        })
    }

    render() {
        return(
            <React.Fragment>
                <a className="facebook-icon-link" href="#" style={this.state.facebookIcon}>
                    <span className="facebook-icon-span"><i className="fa fa-facebook-official"></i></span>
                </a>
                <div className={this.state.searchAreaClass}>
                    <div className="search-area-main">
                        <span className="search-cancel" style={this.state.searchCancel}><i className="fas fa-angle-double-left"></i></span>
                        <span><i className="fas fa-search search-icon" style={this.state.searchIcon}></i></span>
                        <input className="search-input" type="text" placeholder="Search Facebook"
                               onFocus={this.searchFocus} onBlur={this.searchBlur}/>
                    </div>
                    <div className="search-area-extend" style={this.state.searchAreaExtend}>
                        No recent search
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchAreaHeader;
