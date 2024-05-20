import { HOME_IMG } from "../../utils/constant";

const MidBody = () => {
  return (
    <div className="flex mt-24 ">
      <section className="w-2/4">
        <img src={HOME_IMG} alt="" style={{ height: "500px" }} />
      </section>
      <section className="w-2/4 p-10 flex flex-col justify-center bg-slate-100 ">
        <h1 className="text-3xl font-bold ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h1>
        <p className="pt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="bg-[#4F46E5] text-white p-2 w-36 mt-5 hover:border-[#4F46E5] hover:border-2 hover:bg-[#F3F4F6] hover:text-[#4F46E5]">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default MidBody;