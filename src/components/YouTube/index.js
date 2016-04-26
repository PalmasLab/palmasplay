import React from 'react'

import ResizeableComponent from 'components/ResizeableComponent'
import Header from 'components/Header'
import Loader from 'components/Loader'

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

const Subscribe = () => (
    <div className={styles.subs}>
        <div className={styles.sub}>839 418 <span>Subscribers</span></div>
        <input type="button" value="Subscribe"/>
    </div>
)

const Tools = () => (
    <div className={styles.tools}>
        <ul>
            {['Home', 'Videos', 'Playlists', 'Discussions', 'About'].map((s, i) => (
                 <a href="#" key={i}><li className={styles.active}>{s}</li></a>
             ))}
        </ul>
        <ul>
            <a href="#"><li className={styles.facebook}><i className="fa fa-facebook-official fa-2x"></i></li></a>
            <a href="#"><li className={styles.instagram}><i className="fa fa-instagram fa-2x"></i></li></a>
            <a href="#"><li className={styles.googleplus}><i className="fa fa-google-plus-square fa-2x"></i></li></a>
            <a href="#"><li className={styles.twitter}><i className="fa fa-twitter-square fa-2x"></i></li></a>
        </ul>
    </div>
)

const KnobIcon = () => (
    <i className={`fa fa-check ${styles.knob}`}></i>
)

const PlusIcon = () => (
    <i className={`fa fa-plus ${styles.plus}`}></i>
)

const ChannelItem = ({img, name, subs=2000, subscribed}) => (
    <li>
        <img src={img}/>
        <div className={styles.channelInfo}>
            <p>{name} </p>
            <p>{(subs < 1000)?subs:
                (subs < 10**6)?subs/10**3 + 'k':
                (subs < 10**9)?subs/10**6 + 'M':
                (subs < 10**12)?subs/10**9 + 'G':
                'muita gente'
               } <span>{(subs < 10**9)?'subscribers':''}</span></p>
        </div>
        {subscribed?<KnobIcon />:<PlusIcon />}
    </li>
)

let defaultChannels = [
    {img: "https://i.ytimg.com/i/RZoK7sezr5KRjk7BBjmH6w/mq1.jpg",
     name:"#RockMusic", subscribed:false, subs: 309288},
    {img: "https://yt3.ggpht.com/-T7-tAkFbPOk/AAAAAAAAAAI/AAAAAAAAAAA/YE0M7XD3ZNM/s176-c-k-no/photo.jpg",
     name:"S.A.R.S.", subscribed: true, subs: 3892740005},
    {img: "https://yt3.ggpht.com/-KjeWgxQlLV4/AAAAAAAAAAI/AAAAAAAAAAA/fMGm96CImAc/s46-c-k-no/photo.jpg",
     name: "HowToBasic", subscribed: false, subs: 83},
    {img: "https://yt3.ggpht.com/-TrtEHOgcMFE/AAAAAAAAAAI/AAAAAAAAAAA/K547x_dy1bY/s176-c-k-no/photo.jpg",
     name: "Liverpool FC", subscribed: true},
    {img: "https://yt3.ggpht.com/--n5ELY2uT-U/AAAAAAAAAAI/AAAAAAAAAAA/d9JvaIEpstw/s46-c-k-no/photo.jpg",
    name: "thenewboston", subscribed: false}
]

const Channels = ({channels = defaultChannels}) => (
    <div className={styles.channel}>
        <ul>
            <li className={styles.title}><strong>Featured Channels</strong></li>
            {channels.map((c, i) => (
                 <ChannelItem {...c} key={`${i}-${name}`}/>
             ))
            }
        </ul>
    </div>
)

const Uploads = () => (
    <div className={styles.uploads}>
        <h1 className={styles.title}>Popular uploads</h1>
        {[1,2].map((v,i) => (
             <VideoItem id={v} key={i} />
         ))}
    </div>
)

const BigVideo = () => (
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

const VideoItem = ({id}) => (
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

const Playlist = () => (
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

const LoaderContainer = () => (
    <div className={styles.loaderContainer}>
        <Loader/>
    </div>
)

export default class MainView extends React.Component {
    componentDidMount() {
        console.log ('this', this.props, this.state)
        this.props.fetchVideos()
    }

    render() {
        let {viewState, videos} = this.props

        return (
            <div className={styles.panels}>
                <div className={styles.leftPane}>
                    {!videos.isFetching?<LoaderContainer />: null}
                    <div className={!videos.isFetching?styles.blur:null}>
                        <Tools />
                        <BigVideo />
                        <Playlist />
                    </div>
                </div>
            <div className={styles.rightPane}>
                <Subscribe />
                <Channels />
                <Uploads />
            </div>
    </div>
        )
    }
}


