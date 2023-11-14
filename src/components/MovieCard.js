import React from 'react'
import { CDN_IMG } from '../utils/constants'


const MovieCard = ({posterPath}) => {
  return (
    <div  className='w-48 pr-4'>
      <img alt='movies' src={CDN_IMG+posterPath}/>
    </div>
  )
}

export default MovieCard