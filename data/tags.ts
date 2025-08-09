import {
  faClipboardUser,
  faCompass,
  faDice,
  faFishFins,
  faLaptopCode,
  faMartiniGlassCitrus,
  faMusic,
  faPeopleGroup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

interface Tag {
  name: string
  color: string
  icon: IconDefinition
}

export const tags: { [key: string]: Tag } = {
  games: {
    name: 'games',
    color: '#9BF29D',
    icon: faDice,
  },
  diving: {
    name: 'diving',
    color: '#91DCF2',
    icon: faFishFins,
  },
  music: {
    name: 'music',
    color: '#FFF080',
    icon: faMusic,
  },
  parties: {
    name: 'parties',
    color: '#F29193',
    icon: faPeopleGroup,
  },
  code: {
    name: 'code',
    color: '#FEC4FF',
    icon: faLaptopCode,
  },
  cocktails: {
    name: 'cocktails',
    color: '#FFD9B8',
    icon: faMartiniGlassCitrus,
  },
  interviewing: {
    name: 'interviewing',
    color: '#E0BFFF',
    icon: faClipboardUser,
  },
  travel: {
    name: 'travel',
    color: '#DAFFB5',
    icon: faCompass,
  },
}

export const orderedTags = [
  tags.games,
  tags.diving,
  tags.music,
  tags.parties,
  tags.code,
  tags.cocktails,
  tags.interviewing,
  tags.travel,
]
