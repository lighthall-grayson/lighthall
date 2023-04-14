import React, { useState, useEffect } from "react";

function ClickCounter() {
  const [sessionCount, setSessionCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(
    parseInt(localStorage.getItem("globalClickCount")) || 0
  );

  useEffect(() => {
    const storedSessionCount = sessionStorage.getItem("sessionClickCount");
    if (storedSessionCount) {
      setSessionCount(parseInt(storedSessionCount));
    }
  }, []);

  const handleClick = () => {
    const newSessionCount = sessionCount + 1;
    setSessionCount(newSessionCount);
    sessionStorage.setItem("sessionClickCount", newSessionCount);

    const newGlobalCount = globalCount + 1;
    setGlobalCount(newGlobalCount);
    localStorage.setItem("globalClickCount", newGlobalCount);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You've clicked the button {sessionCount} times this session.</p>
      <p>People around the world have clicked the button {globalCount} times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ClickCounter;
