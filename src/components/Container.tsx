import styled from "styled-components";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <StyledContainer>
      <MarkdownInput value={value} onChange={onChange} />
      <MarkdownOutput value={value} />
    </StyledContainer>
  );
};

export default Container;
