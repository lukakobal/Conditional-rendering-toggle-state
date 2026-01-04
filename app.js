import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <button onClick={togglePanel}>
        {isOpen ? "Hide panel" : "Show panel"}
      </button>

      {isOpen && (
        <div className="panel">
          <p>This panel exists only when isOpen is true.</p>
        </div>
      )}
    </div>
  );
}
