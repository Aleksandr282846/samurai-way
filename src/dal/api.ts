export type TrackDetailsResource = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}

type TrackAttachment = {
  url: string
}

type TrackDetailsAttributes = {
  title: string
  attachments: Array<TrackAttachment>
}

type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

export type TrackListItemOutput = {
  id: string
  attributes: TrackDetailsAttributes
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey) return undefined

  return {
    'api-key': apiKey
  }
}

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
    headers: prepareHeaders()
  }).then(res => res.json())

  return promise
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: prepareHeaders()
  }).then(res => res.json())

  return promise
}