import React from 'react'
import Sidebar from 'react-sidebar'
import {Header, SideMenu} from '../../components/YouTube'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'


export class CoreLayout extends React.Component {
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    componentWillMount() {
        var mql = window.matchMedia(`(min-width: 1000px)`);
        mql.addListener(this.mediaQueryChanged.bind(this));
        console.log ('media mount', mql)
        this.setState({mql: mql, sidebarDocked: mql.matches}); 
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        console.log ('media changed', this)
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    toggleSidebar() {
        this.setState({sidebarOpen: !!!this.state.sidebarOpen})
    }

    render() {
        let sidebarContent = <SideMenu />;
        let {children} = this.props;
        return (
            <div>
                <Header toggleSidebar={this.toggleSidebar.bind(this)}/>
                <Sidebar sidebar={sidebarContent}
                         open={this.state.sidebarOpen}
                         docked={this.state.sidebarDocked}
                         onSetOpen={this.onSetSidebarOpen}>

                    <div className={classes.mainContainer}>
                        {children}
                    </div>         
                </Sidebar>
            </div>
        )
    }
}

export const CoreLayout2 = ({ children }) => (
  <div className='container'>
    <Header/>
    <SideMenu/>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
