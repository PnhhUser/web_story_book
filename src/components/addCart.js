import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import img_1 from "../assets/imgs/img_1.jpg";

const maxN = 99;
const minN = 0;
const n = 1;

export default function AddCart() {
  const [count, setCount] = useState(0);
  //   let [price, setPrice] = useState("8.10");

  const refInput = useRef();

  useEffect(() => {
    refInput.current.value = count;
  }, [count]);

  const handleIncrease = () => {
    if (count >= maxN) {
      return maxN;
    } else {
      setCount((c) => c + n);

      //   setPrice((price) =>
      //     (Number(price).toFixed(2) * count === 0 ? 1 : count).toFixed(2)
      //   );
    }
  };

  const handleDecrease = () => {
    if (count <= minN) {
      return minN;
    } else {
      setCount((c) => c - n);
    }
  };

  return (
    <>
      <div className="flex items-center gap-3 border-y-[1px] py-2">
        <div className="flex-2 ">
          <div className="w-10 h-16 border-[1px] overflow-hidden rounded-sm">
            <img
              src={img_1}
              alt="alt not"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <p>The Way to Magic Land </p>
          </div>
        </div>
        <div className="flex-2">
          <div className="w-8 mb-1">
            <IoMdArrowDropup
              className="text-3xl text-slate-500 cursor-pointer"
              onClick={handleIncrease}
            />
          </div>
          <div className="border-[1px] border-black w-8 h-8 ">
            <input
              ref={refInput}
              type="text"
              className="border-0 outline-none w-full h-full text-center"
              minLength={0}
              maxLength={2}
              disabled
            />
          </div>
          <div className="w-8 mt-1">
            <IoMdArrowDropdown
              className="text-3xl text-slate-500 cursor-pointer"
              onClick={handleDecrease}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="mt-6">
          <span className="font-bold">Price:</span>
          <span className="ms-10 text-green-600 font-medium">${8.5}</span>
        </p>
      </div>
    </>
  );
}
