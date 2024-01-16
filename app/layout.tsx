import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ReduxProviders } from '@/lib/providers';
import DefaultLayout from './components/Layout/DefaultLayout';
import { getPostsWithThunk } from '@/lib/redux/slices/postSlice/thunks';
import { getUsersWithThunk } from '@/lib/redux/slices/userSlice/thunks';
import { reduxStore } from '@/lib/redux';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // for thunk proloaded
  // await reduxStore.dispatch(getPostsWithThunk())
  // await reduxStore.dispatch(getUsersWithThunk())
  // const postState = reduxStore.getState().post.data
  // const userState = reduxStore.getState().user.data



  // <ReduxProviders 
  //  preloadedState={{
  //   post: {
  //     data: postState
  //   },
  //   user: {
  //     data: userState
  //   }
  // }}
  // >
  return (
    <ReduxProviders>

      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>

            {children}


          </AppRouterCacheProvider>
        </body>
      </html>
    </ReduxProviders>
  )
}
