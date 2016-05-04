import React from 'react'
import Sidebar from 'react-sidebar'
import {SideMenu} from 'components/SideMenu'
import Header from 'components/Header'
import ResizeableComponent from 'components/ResizeableComponent'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

const Cover = ({src ="http://i.imgur.com/GjLlmP6.jpg" , coverOpen}) => (
    <div className={coverOpen?'':classes.hidden}>
        <div className={classes.cover}>
            <div className={classes.info}>
                <img src={src} />
                <div className={classes.nick}>Dino</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc urna. Integer sed massa et est consequat lacinia sit amet nec eros. Phasellus massa magna, varius vitae pellentesque et, maximus eu nisl.</p>
            </div>
        </div>
    </div>

)

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
                        <div className={classes.mainView}>
                            <Cover {...viewState}/>

                            {children}
                        </div>
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
