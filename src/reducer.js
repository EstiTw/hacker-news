import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action) {
    case SET_STORIES:
      return { ...state, stories: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
  }
  return state;
};
export default reducer;
