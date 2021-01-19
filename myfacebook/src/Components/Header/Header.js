import React, {Component} from 'react';
import FixedHeader from "./FixedHeader";
import BioHeader from "./BioHeader";

class Header extends Component{
    render() {
        return(
            <header>
                <FixedHeader></FixedHeader>
                <BioHeader></BioHeader>
            </header>
        )
    }
}

export default Header;
