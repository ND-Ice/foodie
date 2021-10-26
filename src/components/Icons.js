import styled from "styled-components";

export default function Icons({
  icon: Icon,
  size,
  backgroundColor,
  iconColor,
  onClick,
  ...otherProps
}) {
  return (
    <IconContainer
      size={size}
      backgroundColor={backgroundColor}
      iconSize={0.5 * size}
      iconColor={iconColor}
      onClick={onClick}
      {...otherProps}
    >
      <Icon className="icon" />
    </IconContainer>
  );
}

const IconContainer = styled.span`
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;

  .icon {
    width: ${({ iconSize }) => `${iconSize}px`};
    height: ${({ iconSize }) => `${iconSize}px`};
    color: ${({ iconColor }) => iconColor};
  }
`;
