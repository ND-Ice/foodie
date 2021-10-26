import { useHistory } from "react-router";
import styled from "styled-components";
import concatinate from "../utils/concatinate";

export default function RecipeCard({ recipeInfo }) {
  const { image, label, ingredientLines, healthLabels, mealType } =
    recipeInfo?.recipe;

  const history = useHistory();

  return (
    <Card
      onClick={() => {
        const url = new URL(recipeInfo._links.self.href);
        const urlPathName = url.pathname.split("/");
        const id = urlPathName[urlPathName.length - 1];
        return history.push(`/recipe-details/${id}`);
      }}
    >
      <CardHeader img={image}>
        <CardHeading>{concatinate(label, 30)}</CardHeading>
        <MealType>{mealType[0]}</MealType>
      </CardHeader>

      <CardBody>
        <SecondaryHeading>Health Labels</SecondaryHeading>
        <HealthLabels>
          {healthLabels.slice(0, 6).map((healthLabel, index) => (
            <HealthLabel key={index}>{healthLabel}</HealthLabel>
          ))}
        </HealthLabels>

        <SecondaryHeading>Ingredients List</SecondaryHeading>
        <Ingredients>
          {ingredientLines.slice(0, 4).map((ingredient, index) => (
            <IngredientsItem key={index}>{ingredient}</IngredientsItem>
          ))}
        </Ingredients>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  background: #fafafa;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
  height: max-content;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  position: relative;

  ::after {
    content: "";
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  > * {
    z-index: 2;
  }
`;

const CardHeading = styled.h1`
  font-size: 2.6rem;
  width: 20ch;
  position: absolute;
  color: white;
  left: 1rem;
  bottom: 1rem;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const SecondaryHeading = styled.h2`
  font-size: 2rem;
  margin: 0 0 1rem;
`;

const Ingredients = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > * {
    margin: 2px 0;
  }
`;

const IngredientsItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(50, 50, 50, 0.2);

  @media (min-width: 678px) {
    font-size: 1.8rem;
  }
`;

const HealthLabels = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const HealthLabel = styled.span`
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  color: #ffffff;
  background: #05a081;
  margin: 0.2rem;
  border-radius: 2rem;
`;

const MealType = styled.span`
  background: #05a081;
  border-bottom-left-radius: 5rem;
  border-top-left-radius: 5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 2rem;
  position: absolute;
  right: 0;
  text-transform: capitalize;
  top: 1rem;
`;
