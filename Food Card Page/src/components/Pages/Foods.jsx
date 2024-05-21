import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Select from 'react-select';

const Foods = () => {
  const [food, setFood] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [countries, setCountries] = useState([]);
  const [slectCountry, setSlectCountry] = useState("");

  const navigate = useNavigate();

  async function getFood() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await response.json();
    console.log(data);
    setFood(data.meals);
  }

  async function getCountries() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data2 = await response.json();
    console.log(data2);
    setCountries(data2.meals);
  }

  useEffect(() => {
    getFood();
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  // Define vegetarian and non-vegetarian categories
  const vegetarianCategories = ["Vegetarian", "Vegan", "Salad"];
  const nonVegetarianCategories = ["Beef", "Seafood", "Chicken", "Pork", "Lamb", "Goat"];
  const dessertCategory = "Dessert";

  // Convert countries to options for react-select
  const countryOptions = countries.map((item) => ({
    value: item.strArea,
    label: item.strArea
  }));

  return (
    <>
      <h1 className="pt-16 text-center pb-5 text-3xl font-bold font-mono">
        Search your food recipe
      </h1>
      <div className="flex justify-center gap-10">
        <input
          type="search"
          placeholder=" Search food name"
          className="border-2 p-1.5 rounded-lg w-[350px]"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Select
          options={countryOptions}
          className="w-[200px]"
          placeholder="All Cuisines"
          onChange={(option) => setSlectCountry(option ? option.value : "")}
          isClearable
        />
      </div>
      <div className="pt-14 flex flex-wrap gap-20 w-[90%] m-auto justify-center items-center">
        {food.length === 0 ? (
          <Loader />
        ) : (
          food
            .filter((item) => {
              return (
                item.strMeal.toLowerCase().includes(inputVal.toLowerCase()) &&
                (slectCountry === "" || item.strArea === slectCountry)
              );
            })
            .map((item) => {
              const isVegetarian = vegetarianCategories.includes(item.strCategory);
              const isNonVegetarian = nonVegetarianCategories.includes(item.strCategory);
              const isDessert = item.strCategory === dessertCategory;

              return (
                <div
                  key={item.idMeal}
                  className="flex flex-col p-2 gap-5 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    console.log(item.idMeal);
                    navigate(`/fooddetails/${item.idMeal}`);
                  }}
                >
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-[300px] h-[200px]"
                  />
                  <div className="p-2">
                    <p className="text-xl font-semibold">{item.strMeal}</p>
                    <p className="text-[#9A9A9A]">{item.strArea} foods</p>
                    <p
                      className={`${
                        isVegetarian ? "text-green-600" :
                        isNonVegetarian ? "text-red-600" :
                        isDessert ? "text-yellow-600" : ""
                      }`}
                    >
                      #{item.strCategory}
                    </p>
                    <p className="text-center bg-blue-500 text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                      Check details
                    </p>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
};

export default Foods;
