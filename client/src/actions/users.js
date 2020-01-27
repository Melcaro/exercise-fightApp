import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../actionsTypes';

import { fetchUsers, addUser } from '../services/MatchSrv';

export const getUsers = () => async dispatch => {
  try {
    dispatch({ type: GET_USERS });
    const usersList = await fetchUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: usersList });
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e });
  }
};

// export const addAnUser = (name, score = 0) => async dispatch => {
//   try {
//     dispatch({ type: ADD_USER });
//     const user = await addUser({ name, score });
//     dispatch({ type: ADD_USER_SUCCESS, payload: user });
//   } catch (e) {
//     dispatch({ type: ADD_USER_FAILURE, payload: e });
//   }
// };
