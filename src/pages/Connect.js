import { AppContainer } from "../components";
import styled from "styled-components";

export default function Connect({ history }) {
  return (
    <AppContainer>
      <ContentWrapper>
        <Heading>Currently not Working</Heading>
        <GoBackButton onClick={() => history.push("/")}>Go Back</GoBackButton>
      </ContentWrapper>
    </AppContainer>
  );
}

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3.6rem;
  margin: 2rem;
`;

const GoBackButton = styled.button`
  padding: 2rem 4rem;
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  outline: none;
  color: #ffffff;
  background: #05a081;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
