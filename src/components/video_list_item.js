import React, { PureComponent } from 'react'

const VideoItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.medium.url
  const title = video.snippet.title

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list mdeia'>
        <div className='media-left'>
          <img className='media-object' width='180' height='auto' src={imgUrl} />
        </div>

        <div className='media-body'>
          <div className='media-heading'>{title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoItem

