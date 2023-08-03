import React from 'react'
import { MdOutlineOpenInNew} from 'react-icons/md';
import {LiaGitAlt} from 'react-icons/lia'
const ProjectCard = ({title,description,githubLink,liveLink,imageUrl}) => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto m-4 p-4 flex flex-col md:flex-row justify-start items-center'>
      <div className='flex flex-wrap justify-center w-full  border rounded p-4'>
        
        <div className='w-full md:w-1/2 pr-4'>
          <h5 className='font-bold text-lg mb-4'>{title}</h5>
          <p>{description}</p>
          <div className='flex flex-row flex-wrap m-4'>
          <a href={githubLink}><button className='w-[170px] p-4 px-8 py-2 mb-4 bg-gray-400 rounded mx-2 flex items-center hover:bg-orange-400'>Git hub <LiaGitAlt size={20} className='ml-2'/> </button></a>
          <a href={liveLink}><button className='w-[170px] p-4 px-8 py-2 mb-4 bg-gray-400 rounded mx-2 flex items-center hover:bg-orange-400'>Live Demo <MdOutlineOpenInNew className='ml-2' /></button></a>

        </div>
          </div>
        <div className='w-full md:w-1/2'>
          <img className='rounded' src={imageUrl} alt="/" />
        </div>
      </div>      
    </div>
 
  </>
  )
}

export default ProjectCard
