import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
  }
  return state;
};
export default reducer;
