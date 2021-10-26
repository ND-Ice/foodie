import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Masonry from "react-masonry-css";

import {
  HomeNavItem,
  RecipeCard,
  SearchBar,
  SkeletonLoader,
  BackToTop,
} from "../components";

import backgroundImage from "../image/background.jpg";
import recipeApi from "../api/recipes";
import masonryBreakpoints from "../utils/masonryBreakpoints";
import useDocumentTitle from "../hooks/useDocumentTitle";

export const navList = [
  { id: 1, title: "All", dest: "/" },
  { id: 2, title: "Breakfast", dest: "/breakfast" },
  { id: 3, title: "Lunch", dest: "/lunch" },
  { id: 4, title: "Dinner", dest: "/dinner" },
  { id: 5, title: "Snacks", dest: "/snacks" },
  { id: 6, title: "Teatime", dest: "/teatime" },
];

export default function Home() {
  const location = useLocation();
  const [loading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState({});

  useDocumentTitle("Foodie");

  useEffect(() => {
    getAllrecipes();
  }, []);

  const getAllrecipes = async () => {
    try {
      setIsLoading(true);
      const response = await recipeApi.getAllrecipes();
      setRecipes(response?.data);
      return setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Hero>
        <HeroContent>
          <HeroHeading>
            Find the best suitable recipe for your diet from over 100,000 free
            recipes online.
          </HeroHeading>
          <Link to="/search-recipe">
            <SearchBar />
          </Link>
        </HeroContent>
      </Hero>
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

      <RecipeSection>
        <RecipeHeader>
          <FilterIndicator>All Recipes</FilterIndicator>
          <HomeNavItem to="/all-recipes" title="View all" />
        </RecipeHeader>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {recipes?.hits?.map((recipe, index) => (
              <RecipeCard key={index} recipeInfo={recipe} />
            ))}
          </Masonry>
        )}
      </RecipeSection>
      <BackToTop onClick={() => window.scrollTo(0, 0)} />
    </Container>
  );
}

const Container = styled.section`
  min-height: 100vh;
`;

// ======================================== Hero Section ====================================== //

const Hero = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  position: relative;
  padding: 10rem 1.5rem;

  > * {
    position: relative;
    z-index: 2;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const HeroHeading = styled.h1`
  font-size: 3.6rem;
  color: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HomeNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;
  padding: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  > * {
    margin: 0 1rem;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

// ====================================== Recipe Section ===================================== //

const RecipeSection = styled.section`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 10rem;
  }
`;

const RecipeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterIndicator = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;
