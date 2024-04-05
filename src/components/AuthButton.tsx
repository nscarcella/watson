'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'


export default function AuthButton() {
  const { data: session } = useSession()

  return session
    ? (
      <button onClick={() => signOut()}>
        <Image width={32} height={32} title={session.user?.name ?? ''} alt={session.user?.name ?? ''} src={session.user?.image ?? ''} />
        {' '}
        Sign out
      </button>
      )
    : <button onClick={() => signIn('google')}>Sign in</button>
}