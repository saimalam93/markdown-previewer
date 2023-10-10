import styled from "styled-components";
import Markdown from "react-markdown";

const OutputContainer = styled.div`
  background-color: #e2e2e2;
  border-top: 1px solid #000000;
  color: #151515;
  width: 48%;
  min-height: 80vh;
  transition: all 0.2s ease-in-out;
  padding: 2%;
  z-index: 1;
`;

interface MarkdownOutputProps {
  value: string;
}

const MarkdownOutput = ({ value }: MarkdownOutputProps) => {
  return (
    <OutputContainer>
      <Markdown>{value}</Markdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
