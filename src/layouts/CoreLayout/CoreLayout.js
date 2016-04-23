import React from 'react'
import Sidebar from 'react-sidebar'
import {Header, SideMenu} from '../../components/YouTube'
import ResizeableComponent from 'components/ResizeableComponent'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends ResizeableComponent {
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    toggleSidebar() {
        this.setState({sidebarOpen: !!!this.state.sidebarOpen})
    }

    render() {
        let sidebarContent = <SideMenu />;
        let {children} = this.props;
        let {sidebarOpen, sidebarDocked, small} = this.state;
        return (
            <div>
                <Header toggleSidebar={this.toggleSidebar.bind(this)}/>
                <Sidebar sidebar={sidebarContent}
                         open={sidebarOpen || !small}
                         docked={sidebarOpen || !small}
                         onSetOpen={this.onSetSidebarOpen.bind(this)}>

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
