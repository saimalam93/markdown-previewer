import styled from "styled-components";

const StyledGuide = styled.div`
  background-color: #464646;
  border-top: 1px solid #000000;
  color: #fff;
  width: 100%;
  transition: all 0.2s ease-in-out;
  padding: 1% 0;
  z-index: 1;
`;

const StyledDiv = styled.div`
  background-color: #555555;
  border: 1px solid #000;
  padding: 1%;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 0 10px #000;
`;

const MarkdownGuide = () => {
  return (
    <StyledGuide>
      <StyledDiv>
        <h1 style={{ textDecoration: "underline" }}>Markdown Guide</h1>
        <br />
        <p>
          To create a header, add one to six # symbols before your heading text.
          The number of # you use will determine the size of the heading.
        </p>
        <p>
          For bold use **bold** <br />
          For italics use *italic* <br />
          For link use [Link](http://a.com) <br />
          For image use ![Image](http://url/a.png) <br />
          For inline code use `inline code` <br />
          For code block use ```block code``` <br />
          For list item use - list item
        </p>
      </StyledDiv>
    </StyledGuide>
  );
};

export default MarkdownGuide;
