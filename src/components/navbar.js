import { NavLink } from "react-router-dom";

export default function Navbar() {
  const styleActive = "text-sky-800 font-bold";

  return (
    <div className="py-2 w-full flex justify-center px-10">
      <nav className="w-full flex flex-col sm:flex-row justify-center border-y-[1px] border-sky-800 py-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) => {
            return `mr-16 uppercase text-lg sm:ml-16 mb-2 sm:mb-0 ${
              isActive ? styleActive : "text-slate-400 font-light"
            }`;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) => {
            return `mr-16 uppercase text-lg  mb-2 sm:mb-0 ${
              isActive ? styleActive : "text-slate-400 font-light"
            }`;
          }}
        >
          Shop
        </NavLink>
        <NavLink
          to="cart"
          className={({ isActive }) => {
            return `mr-16 uppercase text-lg relative mb-2 sm:mb-0 ${
              isActive ? styleActive : "text-slate-400 font-light"
            }`;
          }}
        >
          <span>Cart </span>
          <span className="absolute text-[10px] bg-red-600 text-white w-5 h-5 text-center -bottom-2 rounded-full leading-[20px] font-normal">
            0
          </span>
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) => {
            return `mr-16 uppercase text-lg ${
              isActive ? styleActive : "text-slate-400 font-light"
            }`;
          }}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
}
