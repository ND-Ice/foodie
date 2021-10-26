import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Brand, Icons, NavButton, NavItem } from ".";
import useNavbarChangeBackground from "../hooks/useNavbarChangeBackground";

const navList = [
  { id: 1, title: "Home", dest: "/" },
  { id: 2, title: "About", dest: "/about-us" },
  { id: 3, title: "Connect", dest: "/connect-with-us" },
];

export default function NavBar() {
  const isScrolled = useNavbarChangeBackground();
  const location = useLocation();
  const [isNavToggle, setIsNavToggle] = useState(false);

  return (
    <NavContainer isNotHome={location.pathname !== "/"} isScrolled={isScrolled}>
      <Brand />
      <RightSideMobile>
        <Link to="/search-recipe">
          <Icons icon={FiSearch} size={50} iconColor="#ffffff" />
        </Link>
        <Icons
          className="menu-icon"
          icon={FiMenu}
          size={50}
          onClick={() => setIsNavToggle(!isNavToggle)}
        />
      </RightSideMobile>

      <RightSideDesktop>
        <Link to="/search-recipe">
          <Icons icon={FiSearch} size={50} iconColor="#ffffff" />
        </Link>
        {navList?.map((navItem) => (
          <NavItem
            key={navItem.id}
            title={navItem.title}
            to={navItem.dest}
            active={location.pathname === navItem.dest}
          />
        ))}
        <NavButton
          title="Explore"
          backgroundColor="#05a081"
          foreGroundColor="#ffffff"
          to="/all-recipes"
        />
      </RightSideDesktop>
      <MobileMenu active={isNavToggle}>
        <MobileMenuHeader>
          <Brand />
          <Icons
            className="mobile-menu-toggler"
            icon={FiX}
            size={64}
            iconColor="white"
            onClick={() => setIsNavToggle(!isNavToggle)}
          />
        </MobileMenuHeader>
        <MobileMenuNavContainer>
          {navList?.map((navItem) => (
            <NavItem
              key={navItem.id}
              title={navItem.title}
              to={navItem.dest}
              active={location.pathname === navItem.dest}
              onClick={() => setIsNavToggle(!isNavToggle)}
            />
          ))}
          <NavButton
            title="Explore"
            backgroundColor="#05a081"
            foreGroundColor="#ffffff"
            to="/all-recipes"
            onClick={() => setIsNavToggle(!isNavToggle)}
          />
        </MobileMenuNavContainer>
      </MobileMenu>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${({ isScrolled, isNotHome }) => {
    if (isScrolled || isNotHome) return "#232a34";
    return "transparent";
  }};
  transition: all 0.3s;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const RightSideMobile = styled.div`
  display: flex;
  align-items: center;

  .menu-icon {
    cursor: pointer;
    color: #ffffff;
  }

  .search-icon {
    color: #ffffff;
    transition: all 0.3s;

    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const RightSideDesktop = styled.div`
  display: none;
  align-items: center;

  > * {
    margin: 0 1.5rem;
  }

  > .search-icon {
    color: #ffffff;
    transition: all 0.3s;

    :hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: #232a34;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(${({ active }) => (active ? 0 : "-100%")});
  transition: all 0.3s;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid #f2f2f2;

  .mobile-menu-toggler {
    cursor: pointer;
  }
`;

const MobileMenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 2rem 0;
  }
`;
