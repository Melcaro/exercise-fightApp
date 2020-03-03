import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../actionsTypes';

const DEFAULT_STATE = { isLoading: false, users: [{}, {}], error: null };

const usersReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...DEFAULT_STATE,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...DEFAULT_STATE,
        users: payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...DEFAULT_STATE,
        error: payload,
      };
    default:
      return DEFAULT_STATE;
  }
};

export default usersReducer;
