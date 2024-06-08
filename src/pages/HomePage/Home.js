import { Link } from "react-router-dom";
import img_1 from "../../assets/imgs/img_1.jpg";
import video from "../../assets/video/video.mp4";
import { CiPlay1 } from "react-icons/ci";
import { useRef, useState } from "react";
import "./home.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

export default function Home() {
  const [isPlayVideo, setIsPlayVideo] = useState(true);
  const refVideo = useRef();

  const handlePlayVideo = () => {
    setIsPlayVideo(false);
    const currentVideo = refVideo.current;

    currentVideo.setAttribute("controls", "controls");
    currentVideo.play();
  };

  const handlePauseVideo = () => {
    const currentVideo = refVideo.current;

    if (!isPlayVideo) {
      setIsPlayVideo(true);
      currentVideo.removeAttribute("controls");
      currentVideo.pause();
    }
  };

  return (
    <div className="px-10">
      <h2 className="text-xl font-medium mt-2 text-sky-950">
        Our Latest Adventures
      </h2>
      <div className="w-full mt-6 md:flex">
        <div className="">
          <div className="w-[280px] h-[400px] book">
            <img
              src={img_1}
              alt="not alt"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="ms-12">
          <h4 className="text-lg italic border-b-[1px] mt-10 md:mt-0 md:w-1/2 pb-2 border-gray-300 font-semibold">
            The Way to Magic Land
          </h4>
          <p className="w-2/3 mt-6 indent-10 leading-relaxed italic ellipsis">
            The book "The Way to Magic Land" tells the adventure of a little
            girl named Alice. One day, Alice falls into a strange hole and finds
            herself lost in a magical land where extraordinary things are always
            happening. Alice's adventure is full of quirky, surprising
            situations and lessons about diversity, acceptance, and freedom. The
            little girl must face many challenges, overcome obstacles, and
            develop herself to find her way back home.
          </p>
          <p className="mt-2 font-semibold">Author - Jamie olsen</p>
          <div className="mt-6">
            <Link className="w-[100px] h-[35px] leading-[35px] text-center bg-sky-800 text-white inline-block outline-0 rounded-sm">
              Next
            </Link>
          </div>
        </div>
      </div>

      <h2 className="mt-28 text-4xl text-center font-bold text-sky-950 uppercase">
        About Us
      </h2>
      <div className="py-4 w-full flex flex-col items-center rounded-md my-5">
        <p className="text-center md:w-2/3 w-full lg:w-1/2 mb-5 text-slate-500">
          Here, you will find a rich and diverse collection of books spanning
          genres like fiction, literature, psychology, economics, self-help and
          more. We are committed to providing high-quality books that are
          carefully curated to deliver the best reading experience for our
          customers.
        </p>
        <div className="h-[300px] md:w-2/3 lg:h-[450px] xl:h-[550px] bg-gray-100 rounded-md overflow-hidden relative">
          {isPlayVideo && (
            <CiPlay1
              onClick={handlePlayVideo}
              className="absolute text-white text-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            />
          )}
          <video
            ref={refVideo}
            className="w-full h-full object-cover"
            onClick={handlePauseVideo}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="p-2 rounded-sm mb-5 mt-10">
        <div className="w-1/2 p-1 bg-sky-950 rounded-full mb-2"></div>
        <div className="p-2 w-full">
          <div>
            <p>
              <span className="text-4xl font-bold text-sky-950 uppercase">
                Store Book
              </span>
              <br />
              <span className="italic font-thin text-slate-600">
                243 Hung Vuong, Q.Hai Chau, Tp.Da nang
              </span>
              <span className="mx-4">-</span>
              <span className="italic font-thin text-slate-600">
                101 Phan chau trinh, Q.1, Tp.HCM
              </span>
            </p>
            <p>
              <span className="font-bold text-sky-950">Email:</span>
              <span className="italic font-thin text-slate-600 ms-1">
                StoreBook@gmail.com
              </span>
            </p>
            <p>
              <span className="font-bold text-sky-950">Phone:</span>
              <span className="italic font-thin text-slate-600 ms-1">
                0935181211
              </span>
            </p>
            <div className="flex gap-3 mt-2">
              <Link className="w-10 h-10 bg-sky-950 flex justify-center items-center rounded-sm">
                <FaTwitter className="text-white" />
              </Link>
              <Link className="w-10 h-10 bg-sky-950 flex justify-center items-center rounded-sm">
                <TfiYoutube className="text-white" />
              </Link>
              <Link className="w-10 h-10 bg-sky-950 flex justify-center items-center rounded-sm">
                <FaInstagram className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
