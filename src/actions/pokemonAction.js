import axios from 'axios';

import { URL_ENDPOINT } from './index';

const modelConst = 'POKEMON';
const URI = modelConst.toLowerCase().concat('/');

const Action = (type, response) => ({ type, response });

const isLoading = (type, isLoading = false) => ({ type, isLoading });

type pokemonAction = {
  type: string,
  response: Object,
};

export const getPokemonsList = (params : string) => dispatch => {
  console.log(params);
  let url = params.indexOf("pokeapi") > 0 ? params : URL_ENDPOINT+URI+params;
  dispatch(isLoading(`GET_${modelConst}_LIST_LOADING`, true));
  return axios
    .get(url)
    .then(response => {
      dispatch(Action(`GET_${modelConst}_LIST_SUCCESS`,response.data));
      dispatch(isLoading(`GET_${modelConst}_LIST_LOADING`), false);
    })
    .catch(error => {
      dispatch(Action(`GET_${modelConst}_LIST_ERROR`), error);
      dispatch(isLoading(`GET_${modelConst}_LIST_LOADING`), false);
    });
};

export const getPokemon = (objectName : string) => dispatch => {
  dispatch(isLoading(`GET_${modelConst}_LOADING`, true));
  return axios
  .get(URL_ENDPOINT+URI+objectName)
  .then(response => {
    dispatch(Action(`GET_${modelConst}_SUCCESS`,response.data));
    dispatch(isLoading(`GET_${modelConst}_LOADING`), false);
  })
  .catch(error => {
    dispatch(Action(`GET_${modelConst}_ERROR`), error);
    dispatch(isLoading(`GET_${modelConst}_LOADING`), false);
  });
};
