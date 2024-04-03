import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>This is the page</h1>
      <p>Esto es un parrafo.</p>
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