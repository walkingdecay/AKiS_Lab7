import React, {Component} from 'react'
import logo from '../logo.svg';

class CHeader extends Component{
    render(){
        const { aName, aFamily } = this.props
        return(
            <div className="headerContainer">
                <img src={logo} alt="logo" className="headerLogo" />
                <h2>
                    Witaj w naszym przykladowym serwisie { aName + ' ' + aFamily }
                </h2>
            </div>
        );
    }
}

export default CHeader;