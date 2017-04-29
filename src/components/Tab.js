import React from 'react';
import classNames from 'classnames';

class Tab extends React.Component{
    constructor(props) {
        super(props);
        this.renderSubnav = this.renderSubnav.bind(this);
        this.onTabClick = this.onTabClick.bind(this);
    }
    onTabClick(e) {
        console.log(this.props.tabParents);
        e.stopPropagation()
        if (this.props.selectTab) {
            this.props.selectTab(this.props.tabParents
                ? this.props.tabParents.split('^@^').concat(this.props.tabText)
                : [this.props.tabText], this.props.tabText);
        }
    }
    renderSubnav() {
        const {tabText, tabData} = this.props;
        const tabParents = this.props.tabParents ? `${this.props.tabParents}^@^${tabText}` : tabText;
        if (tabData.subnav) {
            return (
                <ul>
                    {Object.keys(tabData.subnav).map((subTabText, subTabIndex) => {
                        return (
                            <Tab
                                tabParents={tabParents}
                                tabText={subTabText}
                                selectTab={this.props.selectTab}
                                tabData={tabData.subnav[subTabText]}
                                key={subTabIndex} />
                        )
                    })}
                </ul>
            )
        }
    }
    render(){
        const {tabText, tabData} = this.props;
        const tabClass = classNames({
            selectedTab: tabData.isSelected
        })
        return (
            <li className={tabClass} onClick={this.onTabClick}>
                <a>{tabText}</a>
                { this.renderSubnav() }
            </li>
        )
    }

}
export default Tab;
