import { useState } from "react";

import data from "./data";

import { nanoid } from "nanoid";

const App = () => {
  // state
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // event handling
  const submitHandler = (e) => {
    // prevent default behavior
    e.preventDefault();

    // array.slice() will return a new array
    let newText = data.slice(0, count);
    // console.log(newText);
    setText(newText);
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="number">paragraph:</label>
        <input
          type="number"
          name="number"
          id="number"
          min={1}
          max={9}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
