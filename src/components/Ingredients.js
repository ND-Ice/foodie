import React from "react";
import styled from "styled-components";

export default function Ingredients({ img, title }) {
  return (
    <Container>
      <IngredientImage src={img} />
      {title}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const IngredientImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
`;
