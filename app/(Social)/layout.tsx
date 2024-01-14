import type { Metadata } from 'next'
import DefaultLayout from '../components/Layout/DefaultLayout';


export const metadata: Metadata = {
  title: 'Social Blog',
  description: 'Social  Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <DefaultLayout >
      {children}
    </DefaultLayout>

  )
}
