import React, {useEffect, useState} from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";


export default () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get(`https://emkay-actions.herokuapp.com/api/projects`)
        .then(res => setProjects(res.data))
        .catch(err => console.log(err.message))
    }, [])

    const deleteproject = id => {
        axios.delete(`https://emkay-actions.herokuapp.com/api/projects/${id}`)
        .then( ({ data }) => {
            const remainingProjects = projects.filter(project => project.id !== data.data.id)
            setProjects(remainingProjects)
        })
    }


    return (
        <StyledDiv>
          {projects.map(project => (
            <NavLink key={project.id} to="/projects/:id">
              <ProjectCard project={project} onDelete = {deleteproject} />
            </NavLink>
          ))}
        
        </StyledDiv>
      );
}


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;