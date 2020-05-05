import { Reducers } from 'redux';
import userReducer from '../fetch/reducer';

const rootReducer = Reducers({
  user: userReducer,
});

export default rootReducer;
