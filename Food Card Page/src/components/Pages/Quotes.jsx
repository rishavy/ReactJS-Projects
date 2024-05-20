import { quotesObj } from "../../utils/quotesData";
export const Quotes = () => {
  return (
    <>
      <div className="pt-2"></div>
      {quotesObj.map((item, idx) => {
        return (
          <>
            <div className="p-12" key={idx}>
              <div className="border-solid border-2 text-[#000] p-8 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-center">{item.quote}</p>
                <p className="text-center pt-4 pb-10">{item.auhtor}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

        