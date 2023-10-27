const Tenant = require("../models/tenant");
module.exports = {
  index,
  new: newTenant,
  create,
  show,
};
async function index(req, res) {
  const tenants = await Tenant.find({});
  res.render("index", { title: "All Movies", tenants });
}

function newTenant(req, res) {
  res.render("tenants/new", {
    title: "ShelterHelper",
  });
}
async function create(req, res) {
  try {
    // Update this line because now we need the _id of the new movie
    const tenant = await Tenant.create(req.body);
    console.log(req.body);
    // Redirect to the new movie's show functionality
    res.redirect(`/tenants/`, { tenant });
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("tenants/new", { errorMsg: err.message });
  }
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const tenants = await Tenant.findById(req.params.id);
  // Mongoose query builder approach to retrieve performers not the movie:
  // Performer.find({}).where('_id').nin(movie.cast)
  // The native MongoDB approach uses a query object to find
  // performer docs whose _ids are not in the movie.cast array like this:

  res.render(`tenants/show`, { title: "All Movies", tenants });
}
