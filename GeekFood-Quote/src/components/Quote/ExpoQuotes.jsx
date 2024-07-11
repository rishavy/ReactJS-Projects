import React from 'react';
import { quotesObj } from "../../utils/quotesData";
import { Quotes } from "./Quotes";

const ExpoQuotes = () => {
  return (
    <>
      {quotesObj.map((item, idx) => (
        <Quotes key={idx} quote={item.quote} author={item.author} />
      ))}
    </>
  );
};

export default ExpoQuotes;
