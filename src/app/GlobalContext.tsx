'use client'

import { SessionProvider } from 'next-auth/react'
import { ContainerProps } from '@/common.d'

export default function GlobalContext({ children }: ContainerProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}