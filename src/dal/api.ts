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

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
    headers: {
      // 'api-key': '65bb1324-2226-4563-950a-d606b12470b3'
    }
  }).then(res => res.json())

  return promise
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: {
      // 'api-key': '65bb1324-2226-4563-950a-d606b12470b3'
    }
  }).then(res => res.json())

  return promise
}