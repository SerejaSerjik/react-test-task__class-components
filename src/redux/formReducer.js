import { GET_FORM_DATA, GET_EMAIL_FOR_RESTORE } from "./formActions";

const initialState = {
  username: "",
  password: "",
  email: ""
};

const formReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_FORM_DATA:
      return Object.assign({}, state, {...payload});
    case GET_EMAIL_FOR_RESTORE:
      return Object.assign({}, state, {...payload});
    default:
      return state;
  }
};

export default formReducer;
