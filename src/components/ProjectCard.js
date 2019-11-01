import React from "react";
import { Button, Card, Heading, Content } from "react-bulma-components";
import styled from "styled-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default function Project(props) {
    console.log(props);
    
    const { project, onDelete} = props
  const { name, description, completed, id } = project;
  return (
    <StyledCard>
      <Heading>{name}</Heading>
      <Content>{description}</Content>
      <Content>{`Completed: ${completed}`}</Content>
      <div>
        <Button
          onClick={(e) => {
            e.stopPropagation()
          }
          }
          color="dark"
        >
          Edit
        </Button>
        <Button onClick={(e) => {
          e.stopPropagation()
          onDelete(id)
        }} color="danger">
          Delete
        </Button>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 25rem;
  margin-left: 5rem;
  border-radius: 0.4rem;
  margin-top: 1.5rem;
  padding-bottom: 1rem;

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;