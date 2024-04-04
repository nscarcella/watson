import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()
  const example = t('common.variable-example', { count: 42 })

  return (
    <main>
      <h1>{t('common.ex.ample')}</h1>
      <p>
        Esto es un parrafo.
        {example}
      </p>
      <div>
        <p>Esto es un parrafo.</p>
        <p>Dale, la concha de tu madre</p>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <form>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}