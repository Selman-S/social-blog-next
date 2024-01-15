'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { reduxStore } from '@/lib/redux'
import { persistStore } from "redux-persist";

persistStore(reduxStore); // persist the store

export const ReduxProviders = (props: React.PropsWithChildren) => {
  console.log('reduxStore', reduxStore.getState());

  return <Provider store={reduxStore}>{props.children}</Provider>
}
