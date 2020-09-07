import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer cwq8XnLSubgameX5nsUr5HIlCjt2nfeKK3vCoUjH7G5FzVqKQhPFA3RyX2f_et0jkNMAC6UN8cQ0wgMblf71EbSMLQJ3KoR9UTisVbnk1VsE6czrtH3CEStFvB5WX3Yx",
  },
});
