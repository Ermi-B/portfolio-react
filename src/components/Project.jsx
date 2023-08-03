import React from 'react';

import ProjectCard from './ProjectCard';
const Project = ({projects}) => {
  return (
  <>
  <div className='mb-32'>
  <h3 className="font-bold text-2xl mt-32 text-center">My Portfolio</h3>
   <div className="flex flex-col justify-center items-center">
                 
                 {projects.map((project, index) => (
                   <ProjectCard
                     
                     key={index}
                     title={project.title}
                     description={project.description}
                     githubLink={project.githubLink}
                     liveLink={project.liveLink}
                     imageUrl={project.imageUrl} // Pass the image URL to the ProjectCard component
                   />
                 ))}
               </div>
  
  </div>
  
  </>

    
  )
}

export default Project
