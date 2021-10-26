import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavButton({
  title,
  backgroundColor,
  foreGroundColor,
  ...otherProps
}) {
  return (
    <NavButtonContainer {...otherProps}>
      <NavItem bg={backgroundColor} fg={foreGroundColor}>
        {title}
      </NavItem>
    </NavButtonContainer>
  );
}

const NavButtonContainer = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

const NavItem = styled.span`
  font-size: 1.7rem;
  padding: 1.5rem 2.5rem;
  color: ${({ fg }) => fg};
  font-weight: 500;
  background: ${({ bg }) => bg};
  border-radius: 1rem;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
