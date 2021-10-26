import styled from "styled-components";

const LoadMore = styled.button`
  background: #05a081;
  border: none;
  color: white;
  display: block;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  width: 100%;
  padding: 2rem;
  margin: 1rem auto;
  transition: all 0.3s;

  :hover {
    opacity: 0.7;
  }
`;

export default LoadMore;
