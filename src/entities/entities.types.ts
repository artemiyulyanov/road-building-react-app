export type Contact = {
    text: string
    subtext: Array<string>
}

export type Service = {
    title: string
    description: string
    iconPath: string
};

export type SitemapLink = {
    text: string
    href: string
}

export type TurnkeyAsphaltFormData = {
  type: string
  contact: string
  description: string
  weight: number
  organization: string
  taxNumber: string
};

export const asphaltTypes = {
    'a': 'А',
    'b': 'Б',
    'c': 'В',
    'd': 'Г',
    'csm': 'ЩМА'
};

export const isAsphaltType = (value: string): value is keyof typeof asphaltTypes => {
  return value in asphaltTypes;
};