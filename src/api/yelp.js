import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer FW0BRlKmx2y372GYAcdbo0cvsIs4XLhTbTLPWmTjgHwC9iduoAWTpolcu81ai5ZLB9QqEircxJxq6tabpA1ZOOz-3g_w1d4-Hx7sDiPv61iI0G6CiL45Gn_1zxpSX3Yx",
  },
});
