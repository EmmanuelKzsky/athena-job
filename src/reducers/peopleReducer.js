// @flow
const modelConst = 'PEOPLE';

type State = {
  list: Array<Object>,
  error: Object,
  message: string,
};

export default function people(state: State = {
  error: {},
  list: [],
  message: "",
}, action: Object) {
  switch (action.type) {
    case `GET_${modelConst}_SUCCESS`:
      return {
        ...state,
        list: action.response,
        message: action.type,
        error: {},
      };
    case `GET_${modelConst}_ERROR`:
      return {
        ...state,
        list: [],
        message: action.type,
        error: action.response,
      };
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
