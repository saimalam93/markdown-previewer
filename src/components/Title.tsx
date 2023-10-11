import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  width: 30%;

  @media (max-width: 600px) {
    width: 50%;
  }
`;

const Title = () => {
  return <StyledTitle>Markdown Previewer</StyledTitle>;
};

export default Title;
