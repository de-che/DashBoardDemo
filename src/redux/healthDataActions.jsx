import axios from 'axios';

export const REQUEST_HEALTH_DATA = 'REQUEST_HEALTH_DATA';
export const RECEIVE_HEALTH_DATA = 'RECEIVE_HEALTH_DATA';
export const INVALIDATE_HEALTH_DATA = 'INVALIDATE_HEALTH_DATA';

export const requestHealthData = () => ({
  type: REQUEST_HEALTH_DATA,
});

export const receiveHealthData = response => ({
  type: RECEIVE_HEALTH_DATA,
  payload: response.data,
});

export const invalidateHealthData = () => ({
  type: INVALIDATE_HEALTH_DATA,
});

export const getHealthData = async dispatch => {
  try {
    dispatch(requestHealthData());
    const response = await axios.get('/api/health-score');
    // eslint-disable-next-line no-console
    console.log(`Received health data from server, count is ${response.data.length}`);
    dispatch(receiveHealthData(response));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Could not get health data from server with error: ${err}.`);
    dispatch(invalidateHealthData());
  }
};
