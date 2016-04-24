import React from 'react'
import ResizeableComponent from 'components/ResizeableComponent'
import styles from './Header.scss'
import LogoImg from './img/logo.png'
import SmallLogo from './img/logo-small.png'


export default class Header extends ResizeableComponent {
    render() {
        let {toggleSidebar} = this.props
        let {small} = this.state
        let headerSize = small?'small':null

        return (
            <div className={`${styles.header} ${styles[headerSize]}`}>
                <a href="#" onClick={toggleSidebar} className={styles.menuBars}>
                    <i className="fa fa-3x fa-bars"></i>
                </a>
                <span className={styles.logo}>
                    <img src={LogoImg} />
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

