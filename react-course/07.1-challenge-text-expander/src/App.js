import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expanded = false,
  className = "",
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  children,
}) {
  const [expandText, setExpandText] = useState(expanded);
  const buttonStyle = {
    border: "0",
    backgroundColor: "transparent",
    cursor: "pointer",
    font: "inherit",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>
        {expandText
          ? children + " "
          : // I shouldn't create the collapsed string if it isn't needed
            // Split -> Turn a string into an array separating by a character
            // Slice -> Take a section of an array
            // Join -> Turn array into string with specified separator
            children.split(" ").slice(0, collapsedNumWords).join(" ") + "... "}
      </span>
      {/* Be careful when changing state based on current state! */}
      <button style={buttonStyle} onClick={() => setExpandText((exp) => !exp)}>
        {expandText ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
