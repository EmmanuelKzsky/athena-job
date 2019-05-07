import axios from 'axios';

import { URL_ENDPOINT } from './index';

const modelConst = 'PEOPLE';

const Action = (type, response) => ({ type, response });

const isLoading = (type, isLoading = false) => ({ type, isLoading });

type peopleAction = {
  type: string,
  response: Object,
};

export const getPeople = (object : Object) => dispatch => {
  dispatch(isLoading(`GET_${modelConst}_LOADING`, true));
  return axios
    .get(URL_ENDPOINT)
    .then(response => {
      dispatch(Action(`GET_${modelConst}_SUCCESS`,response.data.results));
      dispatch(isLoading(`GET_${modelConst}_LOADING`), false);
    })
    .catch(error => {
      dispatch(Action(`GET_${modelConst}_ERROR`), error);
      dispatch(isLoading(`GET_${modelConst}_LOADING`), false);
    });
};
