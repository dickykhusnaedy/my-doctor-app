import {createStore} from 'redux';

const initialState = {
  loading: false,
  photo: '',
  fullName: '',
  profession: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_PROFILE') {
    return {
      ...state,
      photo: action.photo,
      fullName: action.fullName,
      profession: action.profession,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
