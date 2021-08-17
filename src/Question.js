import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [show_info, set_show_info] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => set_show_info(!show_info)}>
          {show_info ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {
        show_info && <p>{info}</p>
      }
    </article>
  );
};

export default Question;
