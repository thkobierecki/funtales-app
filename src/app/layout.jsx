import '@/styles/tailwind.css'
import clsx from 'clsx'
import { Roboto_Flex } from 'next/font/google'

import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

import { getAllItems, getItemData } from '@/lib/getItems'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'FunTales - Niezapomniane Historie dla Twojego Dziecka',
  description:
    'Odkryj magię spersonalizowanych opowieści, które przeniosą Twoje dziecko w świat wyobraźni, przygody i wartości.',
}

export default function RootLayout({ children }) {
  const programs = getAllItems('programs')
  const contact = getItemData('contact', 'global')

  return (
    <html lang="en">
      <body className={clsx('font-sans', roboto.variable)}>
        <Header programs={programs} contact={contact} />
        {children}
        <CallToAction />
        <Footer programs={programs} contact={contact} />
      </body>
    </html>
  )
}
