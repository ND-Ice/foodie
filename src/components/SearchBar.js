import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import Icons from "./Icons";

export default function SearchBar({ ...otherProps }) {
  return (
    <SearchContainer {...otherProps}>
      <SearchInput placeholder="Search for free recipes" />
      <Icons icon={FiSearch} size={64} iconColor="black" />
    </SearchContainer>
  );
}

// search container

const SearchContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 1rem;
  font-size: 1.7rem;
  outline: none;
  border: 0;
  background: transparent;
  flex: 1;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;
