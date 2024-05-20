import { quotesObj } from "../../utils/quotesData";
import Quotes from "./Quotes";

const ExpoQuotes = () => {
  {
    quotesObj.map((item, idx) => {
      return <Quotes key={idx} quotes={item.quote} author={item.auhtor} />;
    });
  }
};

export default ExpoQuotes;