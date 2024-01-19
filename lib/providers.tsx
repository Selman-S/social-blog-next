'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { makeStore } from '@/lib/redux'
interface ReduxProvidersProps {
  children: React.ReactNode
  preloadedState: any
}


export const ReduxProviders = ({ children, preloadedState }: ReduxProvidersProps) => {
  const store = makeStore(preloadedState);

  return <Provider store={store}>{children}</Provider>
}
