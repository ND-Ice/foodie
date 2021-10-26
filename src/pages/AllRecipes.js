import { useState, useEffect } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

import {
  Container,
  RecipeCard,
  SkeletonLoader,
  LoadMore,
  BackToTop,
} from "../components";
import useDocumentTitle from "../hooks/useDocumentTitle";
import masonryBreakpoints from "../utils/masonryBreakpoints";

import api from "../api/recipes";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState({});
  const [loading, setIsLoading] = useState(false);

  useDocumentTitle(`Foodie - Recipes`);

  useEffect(() => {
    getAllrecipes();
  }, []);

  const getAllrecipes = async () => {
    try {
      setIsLoading(true);
      const response = await api.getAllrecipes();
      setRecipes(response?.data);
      return setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <GridContainer>
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

        {recipes?._links?.next && (
          <LoadMore
            disabled={loading}
            onClick={async () => {
              setIsLoading(true);
              const response = await axios.get(recipes?._links?.next?.href);
              setRecipes(response?.data);
              setIsLoading(false);
              return window.scrollTo(0, 0);
            }}
          >
            {loading ? (
              <ScaleLoader color="#ffffff" height={20} />
            ) : (
              "Load More"
            )}
          </LoadMore>
        )}
      </GridContainer>
      <BackToTop onClick={() => window.scrollTo(0, 0)} />
    </Container>
  );
}

const GridContainer = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 5rem;
  }
`;
