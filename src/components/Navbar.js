import React from 'react';
import Tab from './Tab';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        const {tabs} = this.props;
        console.log(tabs)
        console.log(Object.keys(tabs))
        var topStyle = {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        }
        return (
            <div style={{width: '100%', height: '49px', backgroundColor: 'black'}}>
                <ul>
                <li><a>Nested Navbar</a></li>
                {Object.keys(tabs).map((tabText, tabIndex) => <Tab selectTab={this.props.selectTab} tabText={tabText} tabData={tabs[tabText]} key={tabIndex}/>)}
                </ul>
            </div>
        )
    }

}

Navbar.propTypes = {
    selectedTabs: React.PropTypes.object,
    options: React.PropTypes.object,
    links: React.PropTypes.array
}

export default Navbar;
