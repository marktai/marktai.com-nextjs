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
  hoverColor: string
  icon: IconDefinition
}

export const tags: { [key: string]: Tag } = {
  games: {
    name: 'games',
    color: 'bg-[#9BF29D]',
    hoverColor: 'hover:bg-[#9BF29D]',
    icon: faDice,
  },
  diving: {
    name: 'diving',
    color: 'bg-[#91DCF2]',
    hoverColor: 'hover:bg-[#91DCF2]',
    icon: faFishFins,
  },
  music: {
    name: 'music',
    color: 'bg-[#FFF080]',
    hoverColor: 'hover:bg-[#FFF080]',
    icon: faMusic,
  },
  parties: {
    name: 'parties',
    color: 'bg-[#FFD9B8]',
    hoverColor: 'hover:bg-[#FFD9B8]',
    icon: faPeopleGroup,
  },
  code: {
    name: 'code',
    color: 'bg-[#FEC4FF]',
    hoverColor: 'hover:bg-[#FEC4FF]',
    icon: faLaptopCode,
  },
  cocktails: {
    name: 'cocktails',
    color: 'bg-[#F29193]',
    hoverColor: 'hover:bg-[#F29193]',
    icon: faMartiniGlassCitrus,
  },
  interviewing: {
    name: 'interviewing',
    color: 'bg-[#E0BFFF]',
    hoverColor: 'hover:bg-[#E0BFFF]',
    icon: faClipboardUser,
  },
  travel: {
    name: 'travel',
    color: 'bg-[#DAFFB5]',
    hoverColor: 'hover:bg-[#DAFFB5]',
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
