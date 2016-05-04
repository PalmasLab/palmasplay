import React from 'react'

import ResizeableComponent from 'components/ResizeableComponent'
import Header from 'components/Header'
import Loader from 'components/Loader'

import {BigVideo, VideoItem} from 'components/VideoItem'

import styles from './styles.css'

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
                (subs < 10**12)?subs/10**9+ 'G':
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

const FeaturedChannels = ({channels = defaultChannels}) => (
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


import moment from 'moment'
import {randomYTId} from './mock'

let intRandom = (num) => Math.floor(Math.random()*num)
Array.prototype.any = function () {
    return this[intRandom(this.length)]
}

const VideoList = ({errors, items}) => (
    <div>
        <BigVideo error={errors.videos} {...items[0]}/>
        <Playlist error={errors.playlists} items={items.slice(1)}/>
    </div>
)

const Uploads = ({items}) => (
    <div className={styles.uploads}>
        <h1 className={styles.title}>Popular uploads</h1>
        {items.map((v,i) => (
             <VideoItem key={i} {...v}/>
         ))}
    </div>
)

const Playlist = ({name='Interviews', items}) => (
    <div className={styles.playlist}>
        <div className={styles.trak}>
            <h1>{name}</h1>
            <input type="button" value="Play all" />
        </div>

	<ul>
            {items.map((v, i) =>(
                 <VideoItem key={i} {...v}/>
             ))}
        </ul>
    </div>
)

const LoaderContainer = () => (
    <div className={styles.loaderContainer}>
        <Loader/>
    </div>
)

let generateMockVideoItems = (count=10) => {
    let ret = []
    while (count--) {
        let id = randomYTId.any()
        ret.push({
            id: id,
            views: intRandom(50000),
            runtime: intRandom(600),
            cover: {
                high:  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
                med:  `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
            },
            published: moment().subtract(intRandom(10), 'months').toDate(),
            title:'Adam Lallana interview Liverpool FC'
        })
    }
    return ret
}

export default class MainView extends React.Component {
    fetchFromAPI = (fetchAction, key) => {
        fetchAction()
        .then(r => {
            let state = this.state || {};
            let newState = {
                errors: (state.errors || {}),
            }

            switch (r.status) {
                case 'rejected':
                    newState.errors[key] = r
                    newState.fetchError = (state.fetchError || []).concat(r)
                    break;
                default:
                    newState.errors[key] = false
                    break;
            }

            this.setState(newState)
        })
    }

    state = {
        fetchError: false,
        errors: {}
    }

    componentDidMount() {
        console.log ('this', this.props, this.state)

        this.fetchFromAPI(this.props.fetchVideos,    'videos')
        this.fetchFromAPI(this.props.fetchPlaylists, 'playlists')
        this.fetchFromAPI(this.props.fetchRecomends, 'recomends')
    }

    render() {
        let {viewState, api} = this.props
        let {fetchError, errors} = this.state || {}

        let isFetching = ['video', 'playlist', 'recomend']
                            .map(t => (api[t].isFetching))
                            .reduce((l, c) => (l && c), true)

        return (
            <div className={styles.panels}>
                {fetchError && <ul className={styles.errors}>
                {fetchError.map((e, i) => (
                     <li key={i}>ERROR, could not fetch resource of type:
                         <span>{e.type}</span>
                     </li>
                 ))}
                </ul>}
                <div className={styles.leftPane}>
                    {isFetching?<LoaderContainer />: null}
                    <div className={isFetching?styles.blur:null}>
                        <Tools />
                        <VideoList errors={errors} items={generateMockVideoItems(31)}/>
                    </div>
                </div>
                <div className={styles.rightPane}>
                    <Subscribe />
                    <FeaturedChannels error={errors.recomends}/>
                    <Uploads items={generateMockVideoItems(5)} />
                </div>
            </div>
        )
    }
}


