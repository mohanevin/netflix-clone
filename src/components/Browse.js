import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse