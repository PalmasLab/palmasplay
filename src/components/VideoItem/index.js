import React from 'react'
import moment from 'moment'

import styles from './styles.css'

let formatRuntime = (runtime) => (moment.utc(runtime*1000).format("mm:ss"))
let formatPublished = (published) => (moment(published).fromNow())

let prettyNumber = (num) => (
    // hackish, we probably can do that with a single replace
    num.toString()
       .replace(/(\d{3})$/g, ', $&')       // 1k
       .replace(/(\d)(\d{3}),/, '$1, $2,') // 1M
       .replace(/(\d)(\d{3}),/, '$1, $2,') // 1G
       .replace(/(\d)(\d{3}),/, '$1, $2,') // 1T
       .replace(/(\d)(\d{3}),/, '$1, $2,') // 1P
)

export const BigVideo = ({
    views=1531912, runtime=756,
    published=moment().subtract(1, 'weeks').toDate(),
    img='http://www.lostivalepensante.it/wp-content/uploads/ay102894607epa03566911-live.jpg',
    title='Steven Gerrard - The best goals ever (1998-2015)'
}) => (
    <div className={styles.bigVideo}>
        <a href="#">
            <div className={styles.videoContainer}
                 style={{backgroundImage: `url("${img}")`}}>
                <div className={styles.vrh}>
                    <span className={styles.views}>{prettyNumber(views)} views</span>
                    <span className={styles.runtime}>{formatRuntime(runtime)}</span>
                </div>
                <div className={styles.dno}>
                    <h1>{title}</h1>
                    <p>Published {formatPublished(published)}</p>
                </div>
                <div className={styles.overlay}>
                    <i className="fa fa-play fa-5x"></i>
                    <h1>Play video</h1>
                </div>
            </div>
        </a>
    </div>
)

export const VideoItem = ({
    id, views=52316, runtime=5*60+13,
    img='https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg',
    published=moment().subtract(3, 'months').toDate(),
    title='Adam Lallana interview Liverpool FC'
}) => (
    <li>
        <div className={styles.video}>
            <div className={styles.videoInfo}
                 style={{backgroundImage: `url("${img}")`}}>
                <span className={styles.views}>{prettyNumber(views)} views</span>
                <span className={styles.runtime}>{formatRuntime(runtime)}</span>
            </div>
            <a href="#"><h2>{title}</h2></a>
            <span className={styles.published}>Published {formatPublished(published)}</span>
        </div>
    </li>
)
