import { Link } from "react-router-dom";
import img_1 from "../assets/imgs/img_1.jpg";
import { Modal as ModalAddCart } from "../components/modal";
import { useState } from "react";
import AddCart from "../components/addCart";

export default function DetailProduct() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddCart = () => {
    setIsOpenModal(true);
  };

  const handleOnCLose = (isClose) => {
    setIsOpenModal(isClose);
  };

  return (
    <div className="px-10">
      <div className="w-full mt-6">
        <div className="w-full flex justify-center bg-gray-50 h-[480px] items-center">
          <div className="w-[320px] h-[420px] book">
            <img
              src={img_1}
              alt="not alt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:ms-12 my-10">
          <h4 className="text-2xl md:text-4xl italic border-b-[1px] mt-10 md:mt-0 md:w-1/2 pb-2 border-gray-300 font-semibold">
            The Way to Magic Land
          </h4>
          <p className="w-full md:w-2/3 mt-6 indent-10 leading-relaxed italic text-sm md:text-lg">
            The book "The Way to Magic Land" tells the adventure of a little
            girl named Alice. One day, Alice falls into a strange hole and finds
            herself lost in a magical land where extraordinary things are always
            happening. Alice's adventure is full of quirky, surprising
            situations and lessons about diversity, acceptance, and freedom. The
            little girl must face many challenges, overcome obstacles, and
            develop herself to find her way back home.
          </p>
          <p className="mt-2 font-semibold">Author - Jamie olsen</p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-green-600 font-semibold">$ 8.10</span>
          </p>
          <div className="mt-6">
            <Link
              to="/cart"
              className="w-[100px] h-[35px] leading-[35px] text-center bg-green-600 text-white inline-block outline-0 rounded-sm"
            >
              Buy
            </Link>

            <div
              onClick={handleAddCart}
              className="ms-4 cursor-pointer w-auto h-[35px] px-5 leading-[35px] text-center bg-sky-800 text-white inline-block outline-0 rounded-sm"
            >
              Add Cart
            </div>
          </div>
        </div>
      </div>
      <ModalAddCart
        isOpen={isOpenModal}
        onClose={handleOnCLose}
        title="Cart"
        body={<AddCart />}
      />
    </div>
  );
}
