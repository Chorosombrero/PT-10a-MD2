import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types.js";

const initialState = {
  list: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
     const updatedList = [...state.list, action.payload];
     return {
        ...state,
        list: updatedList,
      };
    
   case DELETE_PRODUCT:
     const filterList = state.list.filter(
        product => product.id !== action.payload
    );
     return {
        ...state,
        list: filterList,
    };
    default:
    return state;
    }
};

export default rootReducer;
