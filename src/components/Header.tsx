import { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import MarkdownGuide from "./MarkdownGuide";

const Header = () => {
  const [showDiv, setShowDiv] = useState(false);

  const onToggleGuide = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <HeaderContainer onToggleGuide={onToggleGuide} />
      {showDiv && <MarkdownGuide />}
    </div>
  );
};

export default Header;
