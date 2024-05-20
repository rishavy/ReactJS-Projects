import React, { useEffect, useState } from "react";

const Foods = () => {
  const [food, setFood] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  async function getFood() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await response.json();
      console.log(data);
      setFood(data.meals || []);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  }

  async function getCountries() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data2 = await response.json();
      console.log(data2);
      setCountries(data2.meals || []);
    } catch (error) {
      console.error("Error fetching countries data:", error);
    }
  }

  useEffect(() => {
    getFood();
    getCountries();
  }, []);

  return (
    <>
      <h1 className="pt-24 text-center pb-5 text-3xl font-bold font-mono">
        Search for Food Recipes
      </h1>
      <div className="flex justify-center gap-10">
        <input
          type="search"
          placeholder="Search food name"
          className="border-2 p-2 w-[300px]"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        <select
          name="countries"
          className="border-2 p-2"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {countries.map((item) => (
            <option value={item.strArea} key={item.strArea}>
              {item.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="pt-14 flex flex-wrap gap-20 w-[90%] m-auto justify-center items-center">
        {food
          .filter((item) =>
            item.strMeal.toLowerCase().includes(inputVal.toLowerCase())
          )
          .filter((item) =>
            selectedCountry ? item.strArea === selectedCountry : true
          )
          .map((item) => (
            <div
              key={item.idMeal} // Assuming `idMeal` is the correct unique identifier
              className="flex flex-col p-2 gap-5 rounded-lg shadow-xl cursor-pointer"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-[300px] h-[200px]"
              />
              <div className="p-2">
                <p className="text-xl font-semibold">{item.strMeal}</p>
                <p className="text-[#9A9A9A]">{item.strArea} foods</p>
                <p className="">#{item.strCategory}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Foods;
