
import { counterSlice } from './slices'
import { postSlice } from './slices/postSlice'
import { themeSlice } from './slices/themeSlice'
import { userSlice } from './slices/userSlice'


export const reducer = {
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
  post: postSlice.reducer,
  user:userSlice.reducer,
}
