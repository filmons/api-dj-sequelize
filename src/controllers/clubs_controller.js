const { Club } = require("../../models");

const clubsController = {
  getAllClubs: async () => {
    const clubs = await Club.findAll({
      order: [["name", "ASC"]],
      attributes: ["name"],
      raw: true,
    });
    return clubs;
    //return {pulet :"fifi"}; pour voir dans le table clubs car il est vide 
  },
  getClub: async (name) => {
    // Your code here
    return {};
  },
  addClub: async (data) => {
    // Your code here
    return {};
  },
};

module.exports = clubsController;
