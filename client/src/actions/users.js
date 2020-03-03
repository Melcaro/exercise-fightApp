import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../actionsTypes';

import { fetchUsers } from '../services/MatchSrv';

export const getUsers = () => async dispatch => {
  try {
    dispatch({ type: GET_USERS });
    const usersList = await fetchUsers(2);
    dispatch({ type: GET_USERS_SUCCESS, payload: usersList });
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e });
  }
};
