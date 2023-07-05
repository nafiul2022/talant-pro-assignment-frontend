import Image from "next/image";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image
          height={100}
          width={100}
          src={icon}
          alt="Icon"
          className="w-6 h-6 mr-2"
        />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      <button className="mt-4 flex items-center text-sky-blue hover:underline">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 15.293a1 1 0 0 0 1.414 0L12 10.414V12a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H7a1 1 0 1 0 0 2h2.586L6.293 8.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;
