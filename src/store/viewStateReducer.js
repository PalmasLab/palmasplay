/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_COVER = 'TOGGLE_COVER'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function toggle_sidebar (value: boolean = true): Action {
    return {
        type: TOGGLE_SIDEBAR,
        payload: value
    }
}

export function toggle_cover (value: boolean = true): Action {
    return {
        type: TOGGLE_COVER,
        payload: value
    }
}

export const actions = {
    toggle_sidebar,
    toggle_cover,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [TOGGLE_SIDEBAR]: (state: boolean, action: {payload: boolean}): boolean => ({...state, sidebarOpen: !!!state.sidebarOpen}),
    [TOGGLE_COVER]: (state: boolean, action: {payload: boolean}): boolean => ({...state, coverOpen: !!!state.coverOpen})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    sidebarOpen: false,
    coverOpen: false
}

export default function viewStateReducer (state: object = initialState, action: Action): object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
