import Image from "next/image";
import { IMAGE_URL } from "../constant";

const ServiceCard = ({ icon, title, shortDescription }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <Image
        height={1000}
        width={1000}
        src={`${IMAGE_URL}${icon}`}
        alt="Icon"
        className="h-24 w-auto mr-2"
      />
      <div className="h-16 sm:h-24 md:h-26 lg:h-24">
        <h3 className="text-lg font-bold mt-7 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm">{shortDescription}</p>
      </div>
      <button className="mt-4 flex items-center font-semibold text-[#32c5ff] hover:underline">
        Learn More
        <Image
          height={1000}
          width={1000}
          src="/right-arrow.png"
          className="w-5 h-auto ml-3"
        />
      </button>
    </div>
  );
};

export default ServiceCard;
