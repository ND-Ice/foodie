import styled from "styled-components";
import { AppContainer } from "../components";
import heroImage from "../image/HeroImage.jpg";

export default function About() {
  return (
    <AppContainer>
      <Heading>About Us</Heading>
      <GridContainer>
        <HeroContainer>
          <HeroImage src={heroImage} />
        </HeroContainer>
        <HeroContent>
          <ContentWrapper>
            <SecondaryHeading>Mission and Vission</SecondaryHeading>
            <ContentDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              aperiam? Consectetur quaerat inventore veritatis hic
              necessitatibus aliquid laborum impedit ullam tempore aut
              voluptatum quasi fugiat eaque, recusandae aliquam incidunt quo
              doloremque temporibus? Sapiente quaerat, laudantium modi ut minima
              tenetur quam? Aperiam placeat voluptate quia inventore
              repudiandae, ex delectus voluptas excepturi?
            </ContentDescription>
            <ContentDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              labore quod quis nemo consectetur quaerat praesentium! Officia
              aperiam, hic odit quae reprehenderit assumenda quam minima alias,
              repudiandae dolorum est officiis ut, eum praesentium atque commodi
              recusandae libero! Esse, fugiat possimus?
            </ContentDescription>
          </ContentWrapper>
        </HeroContent>
      </GridContainer>
    </AppContainer>
  );
}

const Heading = styled.h1`
  font-size: 3.6rem;
  margin: 1 0 2rem;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  padding: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 5rem;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem;
  display: grid;
  place-items: center;

  @media (min-width: 1024px) {
    text-align: left;
    padding: 5rem;
  }
`;

const ContentWrapper = styled.div``;

const SecondaryHeading = styled.h2`
  font-size: 2.6rem;
`;

const ContentDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
