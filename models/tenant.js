const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  task: String,
  timeCompleted: String,
  id: String,
});
const tenantSchema = new Schema(
  {
    id: String,
    name: String,
    avatar: String,
    species: String,
    breed: String,
    age: Number,
    medicine: String,
    notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
