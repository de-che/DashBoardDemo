import { INVALIDATE_HEALTH_DATA, REQUEST_HEALTH_DATA, RECEIVE_HEALTH_DATA } from './healthDataActions';

const initialState = {
  hasRequested: false,
  isFetching: false,
  didInvalidate: false,
  list: [],
};

const healthDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INVALIDATE_HEALTH_DATA:
      return { ...state, didInvalidate: true };
    case REQUEST_HEALTH_DATA:
      return { ...state, isFetching: true, didInvalidate: false };
    case RECEIVE_HEALTH_DATA:
      return {
        ...state,
        hasRequested: true,
        isFetching: false,
        didInvalidate: false,
        list: payload,
      };
    default:
      return state;
  }
};

export default healthDataReducer;
