import { useState } from "react";

function TextExpander({
  children,
  buttonColor = "#121221",
  expandButtonText = "read more",
  collapseButtonText = "Show less",
  collapsedNumWords = 7,
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children?.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className="max-w-[270px] text-hotTopicColor font-Playfair text-lg font-normal leading-[180%] justify-center items-center hidden md:block">
      <span>{displayText}</span>

      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
