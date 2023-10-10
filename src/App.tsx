import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Container from "./components/Container";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <Header />
      <Container value={markdown} onChange={handleChange} />
    </>
  );
}

export default App;
