import styled, { keyframes } from "styled-components";

export default function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonHeader />
      <SkeletonBody>
        <SkeletonHeading />
        <SkeletonText />
        <SkeletonText />
        <SkeletonTextShort />
        <SkeletonText />
        <SkeletonText />
        <SkeletonTextShort />
      </SkeletonBody>
    </SkeletonContainer>
  );
}

const pulseAnimation = keyframes`
	from {
	background-color:hsl(200 , 0% , 90%)
	}

	to {
	background-color:hsl(200 , 0% , 100%)
	}
`;

const SkeletonContainer = styled.div`
  background: #fafafa;
  border-radius: 1rem;
  overflow: hidden;
`;

const SkeletonHeader = styled.div`
  height: 200px;
  background: #e5e7eb;
  animation: ${pulseAnimation} 0.8s linear infinite alternate;
  opacity: 0.7;
`;

const SkeletonBody = styled.div`
  padding: 1rem 2rem;
`;
const SkeletonHeading = styled.span`
  background: #e5e7eb;
  width: 50%;
  height: 20px;
  display: block;
  border-radius: 0.5rem;
  margin: 1rem 0;
  opacity: 0.7;
  animation: ${pulseAnimation} 0.8s linear infinite alternate;
`;

const SkeletonText = styled.span`
  display: inline-block;
  height: 20px;
  width: 100%;
  background: #e5e7eb;
  border-radius: 0.5rem;
  margin: 0.2rem 0;
  opacity: 0.7;
  animation: ${pulseAnimation} 0.8s linear infinite alternate;
`;

const SkeletonTextShort = styled(SkeletonText)`
  width: 70%;
`;
