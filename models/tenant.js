const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  task: String,
  timeCompleted: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const taskSchema = new Schema({
  task: String,
});
const tenantSchema = new Schema(
  {
    name: String,
    avatar: String,
    species: String,
    breed: String,
    age: Number,
    medicine: String,
    notes: String,
    log: [logSchema],
    tasks: [taskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tenant", tenantSchema);
