import { injectReducer } from '../../store/reducers'

export default (store) => ({
//  path: 'videos',
  getComponent (nextState, next) {
    require.ensure([
      './containers/VideosContainer',
      './modules/videos'
    ], (require) => {
      /*  These modules are lazily evaluated using require hook, and
          will not loaded until the router invokes this callback. */
      const videos = require('./containers/VideosContainer').default
      const reducer = require('./modules/videos').default

      injectReducer(store, { key: 'videos', reducer })

      next(null, videos)
    })
  }
})
