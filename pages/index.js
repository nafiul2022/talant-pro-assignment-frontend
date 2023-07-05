import ServiceCard from "@/components/ServiceCard";
import SpaceShipServices from "@/services/spaceshipServices";

const IndexPage = ({ data }) => {
  return (
    <div className="container mx-auto py-10 px-3 sm:px-1">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-7">
          Explore our Storage Space, Co-Working Space, Co-Warehouse & Services
        </h1>
        <h2 className="text-gray-600 mb-8">
          Carefully crafted for a hassle-free and affordable experience
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((e, idx) => (
          <ServiceCard
            key={idx}
            icon={e.icon}
            title={e.title}
            shortDescription={e.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await SpaceShipServices.getAllServices();
  const data = response.data;

  return {
    props: {
      data: data,
    },
  };
};

export default IndexPage;
