import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Investigation } from '@/model'
import Timeline from '@/components/Timeline'

export default function Home() {
  const investigation: Investigation = {
    characters: [
      {
        id: '1',
        name: 'John Doe',
        age: 30,
        image: '/Open Peeps - Bust.png',
        color: '#ca94fc',
      },
      {
        id: '2',
        name: 'Jane Didi',
        age: 30,
        image: '/Open Peeps - Bust.png',
        color: '#ca94fc',
      },
      {
        id: '3',
        name: 'Tito Puente',
        age: 30,
        image: '/Open Peeps - Bust.png',
        color: '#ca94fc',
      },
    ],
    locations: [],
    activities: [],
    events: [],
  }


  return (
    <main>
      <Timeline investigation={investigation} />
    </main>
  )
}