/* Core */
import themeConfig from '@/theme.config';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'



const initialState: ThemeConfigSliceState = {
  isDarkMode: false,

  theme: themeConfig.theme, // light | dark | system
 
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  
  reducers: {
    toggleTheme(state, { payload }) {
      payload = payload || state.theme;
      localStorage.setItem('theme', payload);
      state.theme = payload;
      if (payload === 'light') { // light | dark | system
          state.isDarkMode = false;
      } else if (payload === 'dark') {
          state.isDarkMode = true;
      } else if (payload === 'system') {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              state.isDarkMode = true;
          } else {
              state.isDarkMode = false;
          }
      }

      if (state.isDarkMode) {
          document.querySelector('body')?.classList.add('dark');
      } else {
          document.querySelector('body')?.classList.remove('dark');
      }
  },
  },

})

/* Types */
export interface ThemeConfigSliceState {
  isDarkMode: boolean
  theme: string
}