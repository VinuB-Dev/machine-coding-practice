export default function dataReducer(state, action) {
  switch (action.type) {
    case "SORT":
      if (action.payload === "high to low") {
        return {
          ...state,
          filteredData: state.filteredData.sort((a, b) => b.price - a.price)
        };
      } else {
        return {
          ...state,
          filteredData: state.filteredData.sort((a, b) => a.price - b.price)
        };
      }
    case "IDEAL_FOR":
      return {
        ...state,
        filteredData: state.data.filter((i) => i.gender === action.payload)
      };
    case "BRAND":
      return {
        ...state,
        filteredData: state.data.filter((i) =>
          action.payload.checker.includes(i.brand)
        )
      };
    case "SIZE":
      return {
        ...state,
        filteredData: state.data.filter((i) =>
          i.sizes.some((ai) => action.payload.includes(ai))
        )
      };
    case "SIZE_REMOVE":
      return {
        ...state,
        filteredData: state.data.filter(
          (i) => !i.sizes.includes(action.payload)
        )
      };
    case "CLEAR":
      return {
        ...state,
        filteredData: state.data
      };

    default:
      return state;
  }
}
