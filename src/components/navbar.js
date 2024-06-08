import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="py-2 w-full flex justify-center px-10">
      <nav className="w-full flex flex-col sm:flex-row justify-center border-y-[1px] border-sky-800 py-6">
        <NavLink className="mr-16 text-lg sm:ml-16 text-sky-800 font-normal mb-2 sm:mb-0">
          Home
        </NavLink>
        <NavLink className="mr-16 text-lg font-light mb-2 sm:mb-0">
          {" "}
          Shop{" "}
        </NavLink>
        <NavLink className="mr-16 text-lg font-light relative mb-2 sm:mb-0">
          <span>Cart </span>
          <span className="absolute text-[10px] bg-red-600 text-white w-5 h-5 text-center -bottom-2 rounded-full leading-[20px] font-normal">
            0
          </span>
        </NavLink>
        <NavLink className="mr-16 text-lg font-light"> Login </NavLink>
      </nav>
    </div>
  );
}
