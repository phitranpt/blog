import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)))
}

//utilize memoize chain
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPost());

//   _.chain(getState().posts)
//     .map('userId')
//     .uniq()
//     .forEach(id => dispatch(fetchUser(id)))
//     .value()//to execute _.chain without it, it won't work
//   }

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POST', payload: response.data })
}

//utilizing memoize
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data })
// })

//non memoize version to fetchUser
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
}