import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

const VideoTrailer = ({ id }) => {
    const trailer = useSelector((store) => store.movies.movieTrailer)
    useTrailerVideo(id)
    return (
        <div className='w-screen'>
            <iframe  className="w-screen aspect-video" src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&controls=0"
        }  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default VideoTrailer