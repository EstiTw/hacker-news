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
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    dispatch({ type: SET_LOADING });
    const urlQuery = `query=${state.query}`;
    try {
      const response = await fetch(`${API_ENDPOINT}${urlQuery}`);
      const data = await response.json();
      // console.log(response, data, data.hits);
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbHits },
      });
    } catch (error) {
      console.log(error);
      //TODO: set loading to false
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
