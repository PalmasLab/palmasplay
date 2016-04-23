import {createResource} from 'redux-rest-resource';

const hostUrl = 'http://localhost:3000/api';

export const {types, actions, reducers} = createResource({
  name: 'video',
  url: `${hostUrl}/videos`
});
