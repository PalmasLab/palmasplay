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

export const BigVideo = ({views, runtime, cover, published, title}) => (
    <div className={styles.bigVideo}>
        <a href="#">
            <div className={styles.videoContainer}
                 style={{backgroundImage: `url("${cover.high}")`}}>
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

export const VideoItem = ({id, views, runtime, cover, published, title}) => (
    <li>
        <div className={styles.video}>
            <div className={styles.videoInfo}
                 style={{backgroundImage: `url("${cover.med}")`}}>
                <span className={styles.views}>{prettyNumber(views)} views</span>
                <span className={styles.runtime}>{formatRuntime(runtime)}</span>
            </div>
            <a href="#"><h2>{title}</h2></a>
            <span className={styles.published}>Published {formatPublished(published)}</span>
        </div>
    </li>
)
