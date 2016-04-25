import React from 'react'
import Sidebar from 'react-sidebar'
import {SideMenu} from 'components/YouTube'
import Header from 'components/Header'
import ResizeableComponent from 'components/ResizeableComponent'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export class CoreLayout extends ResizeableComponent {
    onSetSidebarOpen(open) {
        let {toggle_sidebar, viewState} = this.props;
        viewState.sidebarOpen || toggle_sidebar();
    }

    render() {
        let sidebarContent = <SideMenu />;
        let {children, viewState, toggle_cover, toggle_sidebar} = this.props;
        let {sidebarOpen} = viewState;
        let {small} = this.state;

        let toggleActions = {
            toggleSidebar: toggle_sidebar,
            toggleCover: toggle_cover
        }

        return (
            <div>
                <Header {...toggleActions} />
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
