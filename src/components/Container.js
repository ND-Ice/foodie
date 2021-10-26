import styled from "styled-components";
import { useLocation } from "react-router";
import { navList } from "../utils/navList";
import { HomeNavItem } from ".";

export default function Container({ children }) {
  const location = useLocation();

  return (
    <Layout>
      <HomeNavigation>
        {navList?.map((navItem) => (
          <HomeNavItem
            key={navItem.id}
            title={navItem?.title}
            active={location.pathname === navItem.dest}
            to={navItem.dest}
          />
        ))}
      </HomeNavigation>
      {children}
    </Layout>
  );
}

const Layout = styled.section`
  padding-top: 70px;
`;

const HomeNavigation = styled.div`
  position: sticky;
  top: 1;
  left: 1;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
  padding: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  > * {
    margin: 0 1rem;
  }

  @media (min-width: 768px) {
    justify-content: center;
    padding: 2rem;
  }
`;
