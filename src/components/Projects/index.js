import React from 'react'
import { Container, Wrapper, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal} 
              setOpenModal={setOpenModal} 
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
