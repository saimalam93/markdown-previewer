import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2097ff;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 20%;
  margin: 0 1rem;
  &:hover {
    background-color: #444;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

const Button = ({ onToggleGuide }: { onToggleGuide: () => void }) => {
  return <StyledButton onClick={onToggleGuide}>Cheat sheet</StyledButton>;
};

export default Button;
