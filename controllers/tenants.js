const Tenant = require("../models/tenant");
module.exports = {
  index,
  new: newTenant,
  create,
  show,
  edit,
  update,
  delete: deleteTenant,
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
async function edit(req, res) {
  try {
    const tenants = await Tenant.findById(req.params.id);
    res.render("tenants/edit", { title: "Tenants", tenants });
  } catch (err) {
    console.log(err);
    res.redirect("tenants/");
  }
}

async function update(req, res) {
  try {
    const tenant = await Tenant.findById(req.params.id);
    tenant.name = req.body.name;
    tenant.age = req.body.age;
    tenant.breed = req.body.breed;
    tenant.species = req.body.species;
    tenant.medicine = req.body.medicine;
    tenant.notes = req.body.notes;
    tenant.tasks = req.body.tasks;
    await tenant.save();
    res.redirect(`/tenants/${tenant._id}`);
  } catch (e) {
    console.log(e.message);
    res.redirect("/tenants/"); // This is a simple error handling. Ideally, you might want to show an error message to the user.
  }
}

async function create(req, res) {
  try {
    req.body.tasks = [
      { task: "AM Walk", taskComplete: false },
      { task: "Breakfast", taskComplete: false },
      { task: "PM Walk", taskComplete: false },
      { task: "Dinner", taskComplete: false },
    ];

    // Update this line because now we need the _id of the new movie
    const tenant = await Tenant.create(req.body);

    console.log(req.body);
    // Redirect to the new movie's show functionality
    res.redirect(`/tenants/`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render("tenants/new", { errorMsg: err.message });
  }
}

async function show(req, res) {
  // Populate the cast array with performer docs instead of ObjectIds
  const tenant = await Tenant.findById(req.params.id);
  // Mongoose query builder approach to retrieve performers not the movie:
  // Performer.find({}).where('_id').nin(movie.cast)
  // The native MongoDB approach uses a query object to find
  // performer docs whose _ids are not in the movie.cast array like this:

  res.render(`tenants/show`, { title: "Tenants", tenant });
}

function deleteTenant(req, res, next) {
  // Find the tenant by its _id and delete it
  Tenant.findByIdAndDelete(req.params.id)
    .then(function () {
      // After deletion, redirect to the tenants page
      res.redirect("/tenants/");
    })
    .catch(function (err) {
      // If an error occurs, pass it to the next middleware (likely an error handler)
      return next(err);
    });
}
