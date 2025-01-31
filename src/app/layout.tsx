import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import '@picocss/pico/css/pico.fluid.classless.slate.min.css'
import GlobalContext from './GlobalContext'
import AuthButton from '@/components/AuthButton'


const font = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--pico-font-family',
})

export const metadata: Metadata = {
  title: 'Watson',
  description: 'The handy detective companion',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={`${font.className} ${font.variable}`}>
        <GlobalContext>
          <AuthButton />

          {children}
        </GlobalContext>
      </body>
    </html>
  )
}