import React, { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const speed = 30;

  useEffect(() => {
    let i = 0;
    setDisplayText(text.charAt(0))
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevDisplayText) => prevDisplayText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <p>{displayText}</p>;
}

export default Typewriter;