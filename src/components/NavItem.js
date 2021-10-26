import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavItem({ title, active, ...otherProps }) {
  return (
    <LinkContainer active={active} {...otherProps}>
      <NavTitle>{title}</NavTitle>
    </LinkContainer>
  );
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  opacity: ${({ active }) => (active ? 0.6 : 1)};

  ::after {
    content: "";
    display: block;
    width: ${({ active }) => (active ? "50%" : 0)};
    height: 2px;
    background: #ffffff;
    border-radius: 1rem;
    transition: all 0.2s;
    opacity: ${({ active }) => (active ? 0.6 : 1)};
  }

  :hover::after {
    width: 50%;
    opacity: 0.6;
  }

  :hover {
    opacity: 0.6;
  }
`;

const NavTitle = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  display: inline-block;
  color: #ffffff;
`;
