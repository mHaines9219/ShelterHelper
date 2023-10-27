module.exports = {
  index,
  new: newTenant,
};

function newTenant(req, res) {
  res.render("tenants/new", {
    title: "ShelterHelper",
  });
}
