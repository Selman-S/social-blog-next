/* Instruments */
import persistReducer from 'redux-persist/es/persistReducer'
import { counterSlice } from './slices'
import { postSlice } from './slices/postSlice'
import { themeSlice } from './slices/themeSlice'
import { userSlice } from './slices/userSlice'
import storage from "redux-persist/lib/storage"
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["currentUser"],
};
export const reducer = {
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
  post: postSlice.reducer,
  user:persistReducer(authPersistConfig, userSlice.reducer),
}
