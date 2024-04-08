import { Character } from '@/model'
import Image from 'next/image'
import $ from './Portrait.module.css'

export type CharacterMiniProps = {
  character: Character
}

export default function Portrait({ character }: CharacterMiniProps) {
  return (
    <div className={$.portrait} style={{ backgroundColor: character.color }}>
      <figure>
        <Image
          title={character.name}
          alt={character.name}
          src={character.image}
          layout="fill"
          objectFit="contain"
          fill
        />
      </figure>
    </div>
  )
}