import AppContainer from '@/container/AppContainer'
import React, { PropsWithChildren } from 'react'

const DefaultLayout = ({ children }: PropsWithChildren) => {
 return (
  <AppContainer>{children}</AppContainer>
 )
}

export default DefaultLayout