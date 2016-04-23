import { connect } from 'react-redux'
import { actions, reducers } from '../modules/videos'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import {MainView} from 'components/YouTube'

const mapStateToProps = (state) => ({
  videos: state.videos
})

export default connect(mapStateToProps, actions)(MainView)
