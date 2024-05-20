import { useState } from "react";
import { Restaurants } from "./Restaurants";
import { data } from "../../utils/ResData";

function ResApp() {
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(1);
  const [filteredData, setFilteredData] = useState(data);

  const filterByRating = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);

    const filteredRestaurants = data.filter((item) => item.rating >= newRating);
    setFilteredData(filteredRestaurants);
  };

  const filterByInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const filteredResults = filteredData.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="flex justify-around items-center pt-28">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="border-2 w-[300px] ml-10 p-2"
            value={inputValue}
            onChange={filterByInputValue}
          />
          <div className="flex gap-3 mr-10 items-center">
            <p>Minimum Rating :</p>
            <input
              type="number"
              className="border-2 w-[75px] p-2"
              min={1}
              max={5}
              value={rating}
              onChange={filterByRating}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-10 mt-10">
        {filteredResults.map((item, idx) => (
          <Restaurants
            key={idx}
            resName={item.name}
            rating={item.rating}
            address={item.address}
            outcode={item.outcode}
            postcode={item.postcode}
            typeOfFoods={item.type_of_food}
            visitMenu={item.URL}
          />
        ))}
      </div>
    </div>
  );
}

export default ResApp;
