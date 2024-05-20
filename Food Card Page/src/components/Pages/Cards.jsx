// import { info } from "autoprefixer";
import { GLADIS_IMG } from "../../utils/constant";
const Cards = () => {
  let cardsInfo = [
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
    },
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
    },
    {
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
    },
    {
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
    },
  ];

  return (
    <div className="w-full p-5 flex flex-wrap justify-center gap-5 mt-20">
      {cardsInfo.map((cards) => {
        return (
          <>
            <div className="w-[30%] bg-[#F9FAFB] p-5 rounded-xl">
              <p>{cards.info}</p>
              <div className="flex align-center justify-start gap-3 pt-5">
                <div>
                  <img
                    src={GLADIS_IMG}
                    alt="profile-img"
                    className="h-14 rounded-full"
                  />
                </div>
                <div>
                  <p>Gladiis Lenon</p>
                  <p>Head of SEO</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;