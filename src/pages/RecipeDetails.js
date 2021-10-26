import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AppContainer, Ingredients } from "../components";

export default function RecipeDetails({ match }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  useEffect(() => {
    getRecipedetails();
  }, []);

  const getRecipedetails = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${match.params.path}?type=public&app_id=4bf9ec27&app_key=596f282dfa53d2aaa589aa8a63e1f613`
      );
      return setRecipeDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContainer>
      <HeroImage bg={recipeDetails?.recipe?.image} />
      <RecipeContent>
        <Heading>{recipeDetails?.recipe?.label}</Heading>
        <RecipeDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          fuga tenetur cum sunt. Cupiditate fugiat labore cum cumque. Maxime,
          nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Itaque, minima? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos, molestias.
        </RecipeDescription>

        {/* Ingredients */}
        <SecondaryHeading>Ingredient List</SecondaryHeading>
        {recipeDetails?.recipe?.ingredients?.map((ingredient, index) => (
          <Ingredients img={ingredient?.image} title={ingredient?.text} />
        ))}

        {/* cuisine type */}
        <SecondaryHeading>Cuisine Type</SecondaryHeading>
        {recipeDetails?.recipe?.cuisineType?.map((cuisineType, index) => (
          <Badge bg="#05a081" key={index}>
            {cuisineType}
          </Badge>
        ))}

        {/* dish type */}
        <SecondaryHeading>Dish Type</SecondaryHeading>
        {recipeDetails?.recipe?.dishType?.map((dishType, index) => (
          <Badge bg="#05a081" key={index}>
            {dishType}
          </Badge>
        ))}

        {/* meal type */}
        <SecondaryHeading>Meal Type</SecondaryHeading>
        {recipeDetails?.recipe?.mealType?.map((mealType, index) => (
          <Badge bg="#05a081" key={index}>
            {mealType}
          </Badge>
        ))}

        {/* diet labels */}
        <SecondaryHeading>Diet Labels</SecondaryHeading>
        {recipeDetails?.recipe?.dietLabels?.map((dietLabel, index) => (
          <Badge bg="#05a081" key={index}>
            {dietLabel}
          </Badge>
        ))}

        {/* health labels */}
        <SecondaryHeading>Health Labels</SecondaryHeading>
        {recipeDetails?.recipe?.healthLabels?.map((healthLabel, index) => (
          <Badge bg="#05a081" key={index}>
            {healthLabel}
          </Badge>
        ))}

        {/* cautions */}
        <SecondaryHeading>Cautions</SecondaryHeading>
        {recipeDetails?.recipe?.cautions?.map((dietLabel, index) => (
          <Badge bg="tomato" key={index}>
            {dietLabel}
          </Badge>
        ))}
      </RecipeContent>
    </AppContainer>
  );
}

const HeroImage = styled.div`
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  height: 200px;
  position: relative;

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const RecipeContent = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 1rem 5rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.6rem;
  line-height: 1;
  margin: 1rem 0 2rem;
`;

const RecipeDescription = styled.p`
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SecondaryHeading = styled.h2`
  font-size: 2.6rem;
  margin: 2rem 0 1rem;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  background: ${({ bg }) => bg};
  font-weight: 500;
  color: #ffffff;
  border-radius: 2rem;
  margin: 2px;
  text-transform: capitalize;
`;
