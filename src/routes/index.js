// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Videos from './Videos'

export const createRoutes = (store) => {
/*  Note: Instead of using JSX, we are using react-router PlainRoute,
    a simple javascript object to provide route definitions.
    When creating a new async route, pass the instantiated store!   */

  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute: Videos(store),
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          // Provide store for async reducers and middleware
          require('./Videos').default(store),
          require('./NotFound').default
        ])
      })
    }
  }

  return routes
}

export default createRoutes
