import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
// gert access to the localStorage object from the browser
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

// exports the modified version of rootReducer, with persist capabilities
export default persistReducer(persistConfig, rootReducer)

