import { useState, useEffect } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { ScaleLoader } from "react-spinners";
import axios from "axios";

import {
  Container,
  RecipeCard,
  SkeletonLoader,
  LoadMore,
  BackToTop,
} from "../components";
import masonryBreakpoints from "../utils/masonryBreakpoints";
import useDocumentTitle from "../hooks/useDocumentTitle";

import recipeApi from "../api/recipes";

export default function Dinner() {
  useDocumentTitle("Foodie - Dinner");
  const [loading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    getAllDinnerRecipes();
  }, []);

  const getAllDinnerRecipes = async () => {
    try {
      setIsLoading(true);
      const response = await recipeApi.getAllDinnerRecipes();
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
