import * as types from "../Constants/index";

const initialState = {
  allGroupCategory: [],
  loading: true,
};

const getAllGroupCategory = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_GROUP_CATEGORY:
      return {
        ...state,
        allGroupCategory: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default getAllGroupCategory;
