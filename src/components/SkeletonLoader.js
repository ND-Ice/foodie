import styled from "styled-components";
import Skeleton from "./Skeleton";
export default function SkeletonLoader() {
  return (
    <SkeletonContainer>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </SkeletonContainer>
  );
}

const SkeletonContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
