import React from "react";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="form-control"
              style={{ fontSize:"2rem" }}
              value={input}
              placeholder="0"
              maxLength={12}
              
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="form-control"
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="form-control"
              value={answer}
              disabled
            />
          </>
        )}
      
    </>
  );
};

export default Display;
