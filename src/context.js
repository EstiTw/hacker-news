import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: true,
  query: "node",
  hits: [],
  nbPages: 0,
  page: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    dispatch({ type: SET_LOADING });
    const urlQuery = `query=${state.query}`;
    const urlPage = `page=${state.page}`;
    try {
      const response = await fetch(`${API_ENDPOINT}${urlQuery}&${urlPage}`);
      const data = await response.json();
      //TODO: handle - data is empty array, nbPages == 0
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
      //TODO: set loading to false
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = (type) => {
    dispatch({ type: HANDLE_PAGE, payload: type });
  };

  useEffect(() => {
    fetchItems();
  }, [state.page, state.query]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
