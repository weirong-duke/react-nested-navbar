import React from 'react';
import Navbar from '../components/Navbar';

class Example extends React.Component{
    constructor(props) {
        super(props)
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
            <Navbar tabs={this.state.tabs} />
        )
    }
}

export default Example;
