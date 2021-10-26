import { FiChevronUp } from "react-icons/fi";
import Icons from "./Icons";
import styled from "styled-components";

export default function BackToTop({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Icons
        icon={FiChevronUp}
        size={40}
        iconColor="#ffffff"
        backgroundColor="#05a081"
      />
    </Container>
  );
}

const Container = styled.span`
  display: inline-block;
  position: fixed;
  bottom: 10rem;
  right: 1rem;
  z-index: 10;
`;
