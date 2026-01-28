import type { TrackListItemOutput } from "../dal/api"

type Props = {
  isSelected: boolean
  onSelect: (trackId: string) => void
  track: TrackListItemOutput
}
export function TrackItem({ track, isSelected, onSelect }: Props) {
  const handleClick = () => onSelect?.(track.id)

  return (
    <li className="track" key={track.id} style={{
      borderColor: isSelected ? 'orange' : '#747bff'
    }}
      onClick={handleClick}
    >
      {track.attributes.title}
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}