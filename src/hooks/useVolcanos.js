import { useReducer } from "react";

const ACTIONS = {
  year: "YEAR",
  search: "SEARCH",
  volcano: "VOLCANO",
};

const volcanoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.year: {
      return { ...state, year: payload.year, volcano: null };
    }
    case ACTIONS.search: {
      return { ...state, search: payload.search };
    }
    case ACTIONS.volcano: {
      return { ...state, volcano: payload.volcano };
    }
    default: {
      throw new Error(`Unhandled volcano action type: ${type}`);
    }
  }
};

const useVolcanos = () => {
  const [{ year, search, volcano }, dispatch] = useReducer(volcanoReducer, {
    year: null,
    volcano: null,
    search: "",
  });

  const searchHandler = (search) =>
    dispatch({ type: ACTIONS.search, payload: { search } });

  const yearHandler = (year) =>
    dispatch({ type: ACTIONS.year, payload: { year } });

  const volcanoHandler = (volcano) =>
    dispatch({ type: ACTIONS.volcano, payload: { volcano } });

  return {
    year,
    search,
    volcano,
    searchHandler,
    yearHandler,
    volcanoHandler,
  };
};

export default useVolcanos;
