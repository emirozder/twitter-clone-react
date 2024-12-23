import { Link } from "react-router-dom";
import { topics } from "../../../../utils/consts";
import Topic from "./topic";

export default function Topics() {
  return (
    <section className="mb-4 border border-[#2f3336] rounded-2xl">
      <div className="py-3 px-4">
        <h2 className="leading-6 text-xl text-[#e7e9ea] font-extrabold">
          Neler oluyor?
        </h2>
      </div>
      <div className="grid">
        {topics?.slice(0, 3)?.map((topic, index) => (
          <Topic key={index} item={topic} />
        ))}
        <Link className="p-4 text-[#1d9bf0] hover:bg-[#ffffff08] leading-5 text-[15px] font-normal">
          Daha fazla göster
        </Link>
      </div>
    </section>
  );
}
