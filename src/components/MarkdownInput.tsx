import styled from "styled-components";

const InputContainer = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
  color: #fff;
  width: 48%;
  min-height: 80vh;
  transition: all 0.2s ease-in-out;
  padding: 2%;
  z-index: 1;
`;

const StyledTextArea = styled.textarea`
  background-color: #ffffff;
  color: #121212;
  width: 100%;
  height: 80vh;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput = ({ value, onChange }: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={onChange}
        placeholder="Enter markdown here..."
      />
    </InputContainer>
  );
};

export default MarkdownInput;
