export const filteredReducer = (prevState, action) => {
  // console.log("PrevState ", prevState, " Action ", action);
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...prevState, sortByPrice: action.payload };
    case "SORT_BY_INCLUDE":
      return {
        ...prevState,
        sortByInclude: [...prevState.sortByInclude, action.payload],
      };
    case "REMOVE_SORT_BY_INCLUDE":
      return {
        ...prevState,
        sortByInclude: prevState.sortByInclude.filter(
          (data) => data !== action.payload
        ),
      };
    case "SORT_BY_SIZE":
      return {
        ...prevState,
        sortBySize: [...prevState.sortBySize, action.payload],
      };
    case "REMOVE_SORT_BY_SIZE":
      return {
        ...prevState,
        sortBySize: prevState.sortBySize.filter(
          (data) => data !== action.payload
        ),
      };
    case "SORT_BY_BRAND":
      return {
        ...prevState,
        sortByBrand: [...prevState.sortByBrand, action.payload],
      };
    case "REMOVE_SORT_BY_BRAND":
      return {
        ...prevState,
        sortByBrand: prevState.sortByBrand.filter(
          (data) => data !== action.payload
        ),
      };
    case "CLEAR_FILTERS":
      return {
        sortByPrice: null,
        sortByInclude: [],
        sortBySize: [],
        sortByBrand: [],
      };

    default:
      return prevState;
  }
};
