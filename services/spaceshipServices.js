const { GET_SERVICES_URL } = require("@/constant");
const { default: axios } = require("axios");

class SpaceShipServices {
  static getAllServices = async () => {
    return await axios.get(GET_SERVICES_URL);
  };
}

export default SpaceShipServices;
