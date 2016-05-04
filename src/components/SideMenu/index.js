import React from 'react'
import styles from './styles.css'

const MenuSection = ({title, icon, children}) => (
    <ul>
        <li className={styles.title}><strong>{title}</strong><i className={`fa fa-${icon}`}></i></li>
        {children}
    </ul>
)

export const SideMenu = () => (
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
