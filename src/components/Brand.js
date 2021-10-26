import styled from "styled-components";
import Logo from "../image/Logo.png";

export default function Brand() {
  return (
    <Container>
      <LogoImage src={Logo} />
      <BrandName>Foodie</BrandName>
    </Container>
  );
}

const Container = styled.span`
  display: flex;
  align-items: center;

  > * {
    margin: 0 3px;
  }
`;

const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`;

const BrandName = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 1.9rem;
  color: white;

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;
