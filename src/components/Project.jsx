import React from 'react'
import jobHive from '../assets/job hive shot.JPG'
import marvel from '../assets/marvel.JPG'
const Project = () => {
  return (
  <>
    <div className='max-w-[1240px] mx-auto mt-8 md:mt-32 m-4 p-4 flex flex-col md:flex-row justify-start items-center'>
      <div className='flex flex-wrap justify-center items-center w-full'>
        <h4 className='w-full font-bold text-2xl'>Projects</h4>
        <div className='w-1/2 mt-8'>
          <p>Job Hive : job board</p>
        </div>
        <div className='w-1/2'>
          <img src={jobHive} alt="/" />
        </div>
      </div>      
    </div>
    <div className='max-w-[1240px] mx-auto mt-8 md:mt-32 m-4 p-4 flex flex-col md:flex-row justify-start items-center'>
      <div className='flex flex-wrap justify-center items-center w-full'>
        <h4 className='w-full font-bold text-2xl'>Projects</h4>
        <div className='w-1/2 mt-8'>
          <p>Job Hive : job board</p>
        </div>
        <div className='w-1/2'>
          <img src={marvel} alt="/" />
        </div>
      </div>      
    </div>
  </>

    
  )
}

export default Project
