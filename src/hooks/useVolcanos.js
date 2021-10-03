import { useReducer } from "react";

const ACTIONS = {
  country: "COUNTRY",
  search: "SEARCH",
  volcano: "VOLCANO",
};

const volcanoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.country: {
      return { ...state, country: payload.country };
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
  const [{ country, search, volcano }, dispatch] = useReducer(volcanoReducer, {
    country: null,
    volcano: null,
    search: "",
  });

  const searchHandler = (search) =>
    dispatch({ type: ACTIONS.search, payload: { search } });

  const countryHandler = (country) =>
    dispatch({ type: ACTIONS.country, payload: { country } });

  const volcanoHandler = (volcano) =>
    dispatch({ type: ACTIONS.volcano, payload: { volcano } });

  return {
    country,
    search,
    volcano,
    searchHandler,
    countryHandler,
    volcanoHandler,
  };
};

export default useVolcanos;
