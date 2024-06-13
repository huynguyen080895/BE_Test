import sv from "../services/service";

const getCategory = async (req, res) => {
  try {
    const data = await sv.getAllCategory();
    return res.json(data)
  } catch (e) {
    console.log("error", e);
  }
};

const getGames = async (req, res) => {
  try {
    console.log(req.query)
    const data = await sv.getGames(req.query?.idCategory,req.query?.Count);
    // return res.render("games.ejs", {
    //   data: JSON.stringify(data),
    // });
    return res.json(data)
  } catch (e) {
    console.log("error", e);
  }
};
module.exports = {
  getCategory: getCategory,
  getGames :getGames
};
