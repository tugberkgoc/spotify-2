import Song from './Song'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'

function Songs () {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className='text-white'>
      {playlist?.tracks.items.map((track, index) => (
        <Song key={track.track.id} track={track.track} order={index} />
      ))}
    </div>
  )
}

export default Songs
