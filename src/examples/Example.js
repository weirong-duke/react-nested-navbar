import React from 'react';
import Navbar from '../components/Navbar';

class Example extends React.Component{
    everyTab(tabRoutes, tabs) {
        for (const tabText in tabs) {
            if (tabRoutes.indexOf(tabText) < 0) {
                tabs[tabText].isSelected = false;
            }
            if (tabs[tabText].subnav) {
                this.everyTab(tabRoutes, tabs[tabText].subnav)
            }
        }
    }
    selectTab(tabRoute, tabName) {
        console.log(tabRoute);
        const routeLevel = tabRoute.length;

        const replaceState = {...this.state.tabs};
        let tabObject = replaceState;
        for (let route of tabRoute) {
            if (route !== tabName) {
                tabObject = tabObject[route].subnav;
            }
            else {
                tabObject[route].isSelected = !tabObject[route].isSelected
            }
        }

        this.everyTab(tabRoute, replaceState);

        // function unSelectLevelTabs(tabRoute, routes, levelsDeep) {
        //
        //     for (let level=0; level < levelsDeep; level ++) {
        //         Object.keys(routes).map(routeText => {
        //             if (tabRoute.indexOf(routeText) <0) {
        //                 routes[routeText].isSelected = false;
        //             }
        //         })
        //     }
        // }


        this.setState({
            tabs: replaceState
        })

    }
    constructor(props) {
        super(props)
        this.selectTab = this.selectTab.bind(this);
        this.state = {
            tabs: {
                'Tab 1': {
                    isSelected: true,
                    route: '/tab1',
                    subnav: {
                        'Tab 1.1': {
                            isSelected: true,
                            route: '/tab1.1',
                            subnav: {
                                'Tab 1.11': {route: '/tab1.11'},
                                'Tab 1.12': {route: '/tab1.12'},
                                'Tab 1.13': {route: '/tab1.13'}
                            }
                        },
                        'Tab 1.2': {
                            route: '/tab1.2'
                        },
                        'Tab 1.3': {
                            route: '/tab1.3',
                            subnav: {
                                'Tab 1.31': {route: '/tab1.31'},
                                'Tab 1.32': {
                                    route: '/tab1.32',
                                    subnav: {
                                        'Tab 1.321': {route: '/tab1.321'},
                                        'Tab 1.322': {route: '/tab1.322'},
                                        'Tab 1.323': {route: '/tab1.323'}
                                    }
                                },
                                'Tab 1.33': {route: '/tab1.33'}
                            }
                        }
                    }
                },
                'Tab 2': {
                    route: '/tab2'
                },
                'Tab 3': {
                    route: '/tab3'
                },
                'Tab 4': {
                    route: '/tab4'
                }
            }
        }
    }

    render(){
        return (
            <Navbar tabs={this.state.tabs} selectTab={this.selectTab}/>
        )
    }
}

export default Example;
