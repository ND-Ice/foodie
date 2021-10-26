import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomeNavItem({ title, active, ...otherProps }) {
  return (
    <NavItemContainer active={active} {...otherProps}>
      <NavTitle active={active}>{title}</NavTitle>
    </NavItemContainer>
  );
}

const NavItemContainer = styled(Link)`
  transition: all 0.3s;

  ::after {
    content: "";
    display: block;
    width: ${({ active }) => (active ? "100%" : 0)};
    height: 4px;
    background: #0064f9;
    border-radius: 1rem;
    transition: all 0.3s;
  }
`;

const NavTitle = styled.span`
  display: inline-block;
  font-size: 1.7rem;
  padding: 1rem 2rem;
  color: ${({ active }) => (active ? "#0064f9" : "#96908a")};
  transition: all 0.3s;
  font-weight: 500;

  ${NavItemContainer}:hover & {
    color: #0064f9;
  }
`;
