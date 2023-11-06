import React from 'react'
import VideoTitle from './VideoTitle'
import VideoTrailer from './VideoTrailer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingmovies)
    if(!movies)return;
    const titleVideo=movies[0]
    const { original_title, overview, id } =titleVideo
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoTrailer id={id}/>
    </div>
  )
}

export default MainContainer