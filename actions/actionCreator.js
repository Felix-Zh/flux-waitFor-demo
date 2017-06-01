import AppDispatcher from '../dispatcher/AppDispatcher';
import actionTypes from '../constants/actionTypes';

export default {
  changeCountry(targetCountry) {
    AppDispatcher.dispatch({
      type: actionTypes.changeCountry,
      payload: targetCountry
    });
  },
  changeCity(targetCity) {
    AppDispatcher.dispatch({
      type: actionTypes.changeCity,
      payload: targetCity
    });
  }
};
