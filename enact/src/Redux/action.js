import * as types from "./actionTypes";
import axios from "axios";

const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};

const getDataSuccess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailure = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};

const getData = () => (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9`)
    .then((r) => {
      dispatch(getDataSuccess(r.data));
      console.log("IMDB DATA", r.data);
    })
    .catch((e) => {
      dispatch(getDataFailure(e));
    });
};

export { getData, getDataSuccess };
