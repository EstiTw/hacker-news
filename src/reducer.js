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
    case HANDLE_SEARCH: {
      return { ...state, query: action.payload, page: 0 };
    }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_PAGE: {
      let newPage;
      if (action.payload === "prev")
        newPage = state.page > 0 ? state.page - 1 : state.nbPages - 1;
      else newPage = state.page < state.nbPages - 1 ? state.page + 1 : 0;
      return { ...state, page: newPage };
    }
  }

  return state;
};
export default reducer;
