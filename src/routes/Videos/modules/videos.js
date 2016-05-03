import {createResource, mergeReducers} from 'redux-rest-resource';

const hostUrl = 'http://localhost:4000/api';

let createAPIResource = (name, pluralName = name + 's') => (
    createResource({
        name: name,
        url: `${hostUrl}/${pluralName}`
    })
)

let createAPIResources = (resources) => {
    let ret = {}
    resources.forEach(r => {
        ret[r] = createAPIResource(r);
    })
    return ret
}

let combineResources = (resources) => {
    let ret = {reducers: () => {}}

    Object.keys(resources).map(k => {
        let res = resources[k]

        let newReducer = {}
        newReducer[k] = res.reducers
        ret['reducers'] = mergeReducers(ret['reducers'], newReducer)

        ret.types = {...ret.types, ...res.types}
        ret.actions = {...ret.actions, ...res.actions}
    })

    return ret
}

let resources = createAPIResources(['video', 'playlist', 'recomend'])

export const {types, actions, reducers} = combineResources(resources)
