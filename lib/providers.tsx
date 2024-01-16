'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { reduxStore } from '@/lib/redux'


interface ReduxProvidersProps {
  children: React.ReactNode
}


export const ReduxProviders = ({ children
}: ReduxProvidersProps) => {

  return <Provider store={reduxStore}>{children}</Provider>
}
