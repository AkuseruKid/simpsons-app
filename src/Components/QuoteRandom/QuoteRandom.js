import React from 'react';

function QuoteRandom({ random }) {
  return(
    <div>
      <h2>Random quote :</h2>
      <figure className="QuoteCard">
        <img
        src={random.image}
        alt={random.character}></img>
        <figcaption>
          <blockquote>
            {random.quote}
          </blockquote>
          <p>
            <cite>{random.character}</cite>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default QuoteRandom;