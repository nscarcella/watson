'use client'


import { Investigation } from '@/model'
import Portrait from './Portrait'
import $ from './Timeline.module.css'


export interface TimelineProps {
  investigation: Investigation
}

export default function Timeline({ investigation }: TimelineProps) {
  return (
    <article className={$.Timeline}>
      <section className={$.Timeline_portraits}>
        {
          investigation.characters.map(character => (
            <Portrait key={character.id} character={character}></Portrait>
          ))
        }
      </section>
      <section
        className={$.Timeline_main}
        onWheel={(event) => {
          alert('SI')
          if (event.ctrlKey) {
            return
          }
        }}
      >

        {
          investigation.characters.map(character => (
            <div key={character.id}>
              <div className={$.line} style={{ backgroundColor: character.color }}></div>
            </div>
          ))
        }
      </section>
    </article>
  )
}