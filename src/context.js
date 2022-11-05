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

  const togglePage = (type) => {
    dispatch({ type: HANDLE_PAGE, payload: type });
  };

  const fetchItems = async () => {
    dispatch({ type: SET_LOADING });
    const urlQuery = `query=${state.query}`;
    const urlPage = `page=${state.page}`;
    try {
      const response = await fetch(`${API_ENDPOINT}${urlQuery}&${urlPage}`);
      const data = await response.json();
      // console.log(urlPage, data);
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
      //TODO: set loading to false
    }
  };

  useEffect(() => {
    fetchItems();
  }, [state.page]);

  return (
    <AppContext.Provider value={{ ...state, togglePage }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
