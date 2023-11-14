import React from 'react'
import MovieCard from './MovieCard'
import { motion } from 'framer-motion'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6'>
        <h1 className="text-lg md:text-3xl py-4 text-white">
            {title}
        </h1>
        <div className='flex no-scrollbar overflow-x-scroll'>
            <div className='flex '>
                {movies?.map((movie)=>{

                    return (<motion.div whileHover={{scale:1.1}}>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    </motion.div>)
                    
                })}
            </div>
        </div>
    </div>
  )
}

export default MovieList