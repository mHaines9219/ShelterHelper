module.exports = {
  index,
};

function index(req, res) {
  res.render("profiles", {
    title: "ShelterHelper",
  });
}
