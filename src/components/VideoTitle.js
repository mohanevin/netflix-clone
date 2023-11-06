import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black  md:px-12 py-3 text-xl rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='inline-block mx-2  bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle