'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { makeStore } from '@/lib/redux'
import { persistStore } from "redux-persist";

interface ReduxProvidersProps {
  children: React.ReactNode
  preloadedState: any
}


export const ReduxProviders = ({ children, preloadedState }: ReduxProvidersProps) => {
  const store = makeStore(preloadedState);
  persistStore(store); // persist the store
  console.log('server store', store.getState())
  return <Provider store={store}>{children}</Provider>
}
