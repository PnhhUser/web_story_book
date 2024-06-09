import Select from "react-select";
import "./shop.css";
import img_1 from "../../assets/imgs/img_1.jpg";
import { Link } from "react-router-dom";

const options = [
  { value: "All", label: "All" },
  { value: "Fiction", label: "Fiction" },
  { value: "History", label: "History" },
  { value: "Romance", label: "Romance" },
  { value: "Technical books", label: "Technical books" },
  { value: "Business books", label: "Business books" },
];

export default function Shop() {
  return (
    <div className="px-10">
      <div>
        <h6 className="p-2">
          <span className="text-sm font-semibold"> Filter by</span>
        </h6>
        <div className="ml-2">
          <p className="text-sm text-slate-400 mb-2"> Categories </p>
          <Select
            options={options}
            defaultValue={options[0]}
            className="w-full md:w-[20rem]"
          />
        </div>
        <span className="border-b-[1px] border-slate-300 w-full inline-block"></span>
      </div>

      <div className="flex w-full flex-col md:flex-row md:gap-14 md:flex-wrap">
        {Array.from([1, 2, 3, 4, 5], (_, i) => i).map((item) => {
          return (
            <div
              key={item}
              className="card-book md:w-[200px] md:h-[300px]"
              style={{
                backgroundImage: `url(${img_1})`,
              }}
            >
              <div className="body">
                <div className="flex h-full justify-center flex-col -m-10">
                  <p className="text-lg md:text-sm uppercase text-center mt-1 font-semibold">
                    The way to magic land
                  </p>
                  <Link
                    to="/shop/detail-product/1"
                    className="inline-block text-center text-xl md:text-sm w-full underline"
                  >
                    See
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
