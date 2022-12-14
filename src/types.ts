export interface Image {
  url: string
  thumbnailURL: string
  desc?: string
  badges?: string[]
  location?: string
  downloadURL?: string
}

export interface Section {
  title: string
  images: Image[]
}

export interface Badge {
  name: string
  hint: string
  icons: string[]
  link?: string
  template?: boolean
  download?: boolean
}
