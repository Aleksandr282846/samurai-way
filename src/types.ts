export type Attachment = {
  url: string
}

export type TrackAttributes = {
  title: string;
  attachments: Attachment[]
}

export type Track = {
  attributes: TrackAttributes
  id: string;
}

export type TrackDetailsAttributes = {
  title: string;
  lyrics: string;
  attachments: Attachment[]
}

export type TrackDetailsResource = {
  attributes: TrackDetailsAttributes
  id: string;
}