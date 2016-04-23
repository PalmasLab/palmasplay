import React from 'react'
import Sidebar from 'react-sidebar'
import ResizeableComponent from 'components/ResizeableComponent'

import styles from './styles.css'
import Logo from './logo.png'
import SmallLogo from './logo-small.png'

export class Header extends ResizeableComponent {
    render() {
        let {toggleSidebar} = this.props
        let {small} = this.state
        let headerSize = small?'small':'big'

        return (
            <div className={`${styles.header} ${styles[headerSize]}`}>
                <a href="#" onClick={toggleSidebar} className={styles.menuBars}>
                    <i className="fa fa-3x fa-bars"></i>
                </a>
                <span className={styles.logo}>
                    <img src={Logo} />
                </span>
                <div className={styles.flex}>
                    <input type="search" placeholder="Search"/>
                    <input type="button" value="Upload" />
                    <div className={styles.menu}>
                        <ul>
                            <li><i className="fa fa-envelope-o messages"></i></li>
                            <li><i className="fa fa-bell-o notifications"></i></li>
                            <li><i className="fa fa-caret-down down"></i></li>
                        </ul>
                        <img src="http://i.imgur.com/GjLlmP6.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

const MenuSection = ({title, icon, children}) => (
    <ul>
        <li className={styles.title}><strong>{title}</strong><i className={`fa fa-${icon}`}></i></li>
        {children}
    </ul>
)

export class SideMenu extends React.Component {
    render () {
        return (
            <div className={styles.sideMenu}>
                <MenuSection title="Menu">
                    <a href="#"><li><i className="fa fa-youtube-play"></i>What to watch</li></a>
                    <a href="#"><li><i className="fa fa-user"></i>My Channel</li></a>
                    <a href="#"><li><i className="fa fa-clock-o"></i>History</li></a>
                    <a href="#"><li><i className="fa fa-play-circle-o"></i>Watch later</li></a>
                </MenuSection>
                <MenuSection title="Playlists" icon="cog">
                    <a href="#"><li><i className="fa fa-heart-o"></i>Liked Videos</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>My Music</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>Eminem</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>David Guetta</li></a>
                </MenuSection>
                <MenuSection title="Playlists2" icon="heart">
                    <a href="#"><li><i className="fa fa-heart-o"></i>Liked Videos</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>My Music</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>Eminem</li></a>
                    <a href="#"><li><i className="fa fa-indent"></i>David Guetta</li></a>
                </MenuSection>
            </div>
        )
    }
}

class Tools extends React.Component {
    render() {
        return (
            <div className={styles.tools}>
                <ul>
                    {['Home', 'Videos', 'Playlists', 'Discussions', 'About'].map((s, i) => (
                         <a href="#" key={i}><li className="active">{s}</li></a>
                     ))}

                         <a href="#"><li className={styles.facebook}><i className="fa fa-facebook-official fa-2x"></i></li></a>
                         <a href="#"><li className={styles.instagram}><i className="fa fa-instagram fa-2x"></i></li></a>
                         <a href="#"><li className={styles.googleplus}><i className="fa fa-google-plus-square fa-2x"></i></li></a>
                         <a href="#"><li className={styles.twitter}><i className="fa fa-twitter-square fa-2x"></i></li></a>
                </ul>
                <div className={styles.subs}>
                    <input type="button" value="Subscribe"/>
                    <span className={styles.sub}>839 418 <p>Subscribers</p></span>
                </div>
            </div>
        )
    }
}

class Channels extends React.Component {
    render() {
        return (
            <div className={styles.channel}>
                <ul>
                    <li className={styles.title}><strong>Featured Channels</strong></li>
                    <li><img src="https://i.ytimg.com/i/RZoK7sezr5KRjk7BBjmH6w/mq1.jpg"/><p>#RockMusic <i className="fa fa-check" className={styles.knob}></i></p></li>
                    <li><img src="https://yt3.ggpht.com/-T7-tAkFbPOk/AAAAAAAAAAI/AAAAAAAAAAA/YE0M7XD3ZNM/s176-c-k-no/photo.jpg"/><p>S.A.R.S.</p> <i className="fa fa-plus" className={styles.plus}></i></li>
                    <li><img src="https://yt3.ggpht.com/-KjeWgxQlLV4/AAAAAAAAAAI/AAAAAAAAAAA/fMGm96CImAc/s46-c-k-no/photo.jpg"/><p>HowToBasic</p> <i className="fa fa-check" className={styles.knob}></i></li>
                    <li><img src="https://yt3.ggpht.com/-TrtEHOgcMFE/AAAAAAAAAAI/AAAAAAAAAAA/K547x_dy1bY/s176-c-k-no/photo.jpg"/><p>Liverpool FC</p> <i className="fa fa-check" className={styles.knob}></i></li>
                    <li><img src="https://yt3.ggpht.com/--n5ELY2uT-U/AAAAAAAAAAI/AAAAAAAAAAA/d9JvaIEpstw/s46-c-k-no/photo.jpg"/><p>thenewboston</p> <i className="fa fa-plus" className={styles.plus}></i></li>
                </ul>
            </div>
        )
    }
}

class Uploads extends React.Component {
    render () {
        return (
            <div className={styles.uploads}>
                <h1 className={styles.title}>Popular uploads</h1>
                {[1,2].map((v,i) => (
                     <VideoItem id={v} key={i} />
                 ))}
            </div>
        )
    }
}

class BigVideo extends React.Component {
    render () {
        return (
            <div className={styles.bigVideo}>
                <a href="#">
                    <div className={styles.vel}>
                        <div className={styles.vrh}>
                            <span className={styles.views}>1, 531, 912 views</span>
                            <span className={styles.runtime}>12:36</span>
                        </div>
                        <div className={styles.dno}>
                            <h1>Steven Gerrard - The best goals ever (1998-2015)</h1>
                            <p>Published 7 days ago</p>
                        </div>
                        <div className={styles.overlay}>
                            <i className="fa fa-play fa-5x"></i>
                            <h1>Play video</h1>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

class VideoItem extends React.Component {
    render () {
        let {id} = this.props
        return (
	    <li><div className={styles.video}>
                <div className={styles.videoInfo}>
                    <span className={styles.views}>52, 316 views</span>
                    <span className={styles.runtime}>5:00</span>
                </div>
                <a href="#"><h2>Adam Lallana interview Liverpool FC</h2></a>
                <span className={styles.published}>Published 3 months ago</span>
            </div>
            </li>
        )
    }
}

class Playlist extends React.Component {
    render (){
        return (
            <div className={styles.playlist}>
                <div className={styles.trak}>
                    <h1>Interviews</h1>
                    <input type="button" value="Play all" />
                </div>

	        <ul>
                    {[4, 5, 6, 7, 8, 9, 10].map((v, i) =>(
                         <VideoItem id={v} key={i} />
                     ))}
                </ul>
            </div>
        )
    }
}

export class STE extends React.Component {
    render() {
        return (
            <div className={styles.sve}>
                <div className={styles.cover}>
                    <div className={styles.info}>
                        <img src="http://i.imgur.com/GjLlmP6.jpg" />
                        <div className={styles.nick}>Dino</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nunc urna. Integer sed massa et est consequat lacinia sit amet nec eros. Phasellus massa magna, varius vitae pellentesque et, maximus eu nisl.</p>
                    </div>
                </div>
                <Tools />
                <Channels />
                <Uploads />
                <BigVideo />
                <Playlist />
            </div>
        )
    }
}

export default class YouTube extends React.Component {
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    componentWillMount() {
        var mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    render() {
        let sidebarContent = <SideMenu />;
        return (
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.sidebarDocked}
                     onSetOpen={this.onSetSidebarOpen}>
                <Header />
                {this.props.children}
            </Sidebar>
        )
    }

}
