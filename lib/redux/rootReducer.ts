/* Instruments */
import { counterSlice } from './slices'
import { postSlice } from './slices/postSlice'
import { themeSlice } from './slices/themeSlice'

export const reducer = {
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
  post: postSlice.reducer
}
