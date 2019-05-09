// @flow
const modelConst = 'POKEMON';

type State = {
  list: Object,
  error: Object,
  message: string,
  object: Object

};

export default function pokemon(state: State = {
  error: {},
  list: {},
  message: "",
  object: {}
}, action: Object) {
  switch (action.type) {
    case `GET_${modelConst}_LIST_SUCCESS`:
      return {
        ...state,
        list: action.response,
        message: action.type,
        error: {},
      };
    case `GET_${modelConst}_SUCCESS`:
      return {
        ...state,
        object: action.response,
        message: action.type,
        error: {},
      };
    case `GET_${modelConst}_LIST_ERROR`:
    case `GET_${modelConst}_ERROR`:
      return {
        ...state,
        list: {},
        object: {},
        message: action.type,
        error: action.response,
      };
    case `GET_${modelConst}_LIST_LOADING`:
    case `GET_${modelConst}_LOADING`:
      return {
        ...state,
        loading: action.isLoading,
        message: action.type,
        error: {},
      };
    default:
      return state;
  }
}
