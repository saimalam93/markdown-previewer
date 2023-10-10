import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

const StyledHeader = styled.header`
  background-color: #333;
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0;
  color: #fff;
  padding: 1% 0;
  text-align: center;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const HeaderContainer = ({ onToggleGuide }: HeaderProps) => {
  return (
    <StyledHeader>
      <Title />
      <Button onToggleGuide={onToggleGuide} />
    </StyledHeader>
  );
};

export default HeaderContainer;
