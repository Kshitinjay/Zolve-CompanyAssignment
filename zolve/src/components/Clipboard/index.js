import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./style.css";
const Clipboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const copied = () => {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  };
  return (
    <div>
      <h1>Clipboard</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <CopyToClipboard text={inputValue} onCopy={copied}>
        <div>
          <button>Copy</button>
          {flag ? <p>Copied!</p> : null}
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Clipboard;
