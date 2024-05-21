import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export const FoodDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  async function foodDeatils() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setDetails(data.meals);
    console.log(data.meals);
  }
  useEffect(() => {
    foodDeatils();
  }, [id]);

  return (
    <div className="pt-40">
      <div className="w-[50%] mx-auto rounded-md shadow-lg p-5">
        {details.length === 0 ? (
          <Loader />
        ) : (
          details.map((food) => {

            return (
              <div key={food.idMeal} className="flex flex-col gap-10">
                <div>
                  <img
                    src={food.strMealThumb}
                    alt=""
                    className="w-[700px] h-[400px] m-auto"
                  />
                </div>

                <div className="pl-5">
                  <h1 className="text-2xl font-bold">{food.strMeal}</h1>
                  <h1 className="py-2">
                    <span className="font-bold">Category :</span>{" "}
                    {food.strCategory}
                  </h1>
                  <h1 className="py-1">
                    <span className="font-bold">Area :</span> {food.strArea}
                  </h1>

                  <ul className="list-disc py-3">
                    <span className="font-bold">Ingredients :</span>{" "}
                    <li>{food.strIngredient1}</li>
                  </ul>

                  <div>
                    <span className="font-bold">Instructions :</span> <br />
                    {food.strInstructions}
                  </div>

                  <div className="py-2">
                    Youtube Video Link :{" "}
                    <a href={food.strYoutube} className="text-blue-500">
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};