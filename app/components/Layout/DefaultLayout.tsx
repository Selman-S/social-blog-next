import AppContainer from '@/container/AppContainer'

import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

const DefaultLayout = ({ children }: PropsWithChildren) => {
 return (
  <AppContainer>

   <Navbar />
   {children}


  </AppContainer>
 )
}

export default DefaultLayout