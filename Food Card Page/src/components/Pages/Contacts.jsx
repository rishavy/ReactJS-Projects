import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
const Contacts = () => {
  return (
    <div className="flex gap-20 justify-center">
      <div className="pt-28">
        <div className="flex flex-col gap-5">
          <p className="text-xl font-medium">Contact Us</p>
          <h1 className="text-3xl font-bold">GET IN TOUCH WITH US</h1>
          <p className="text-md w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
        </div>

        <div className="flex flex-col gap-10 mt-10">
          <div className="flex gap-5 items-center">
            <IoHomeOutline className="text-3xl" />
            <div>
              <h1 className="text-xl font-semibold">Our Location</h1>
              <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <FiPhoneCall className="text-3xl" />
            <div>
              <h1 className="text-xl font-semibold">Phone Number</h1>
              <p>+628 22081996</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <IoMailUnreadOutline className="text-3xl" />
            <div>
              <h1 className="text-xl font-semibold">Email Address</h1>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-36">
        <div className="flex flex-col gap-10 p-8 shadow-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 p-2 w-[500px] rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 p-2 w-[500px] rounded-lg"
          />
          <input
            type="text"
            placeholder="Your Number"
            className="border-2 p-2 w-[500px] rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="border-2 p-2 w-[500px] rounded-lg"
            rows={5}
          ></textarea>
          <button className="border-2 p-2 w-[500px] rounded-lg bg-[#2563EB] text-[#fff] font-bold hover:bg-[#4c79da]">Sumbit</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;