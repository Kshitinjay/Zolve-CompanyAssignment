import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./style.css";
const Clipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>Clipboard</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <CopyToClipboard text={inputValue}>
        <div>
          <button>Copy</button>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Clipboard;
