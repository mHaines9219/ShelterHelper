const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const logSchema = new Schema({
//   task: String,
//   timeCompleted: String,
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
// });

const taskSchema = new Schema({
  task: [
    {
      type: String,
      default: ["AM Walk", "Breakfast", "PM Walk", "Dinner"],
    },
  ],
  taskComplete: {
    type: Boolean,
    default: false,
  },
  timeCompleted: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const tenantSchema = new Schema(
  {
    name: String,
    avatar: String,
    species: String,
    breed: String,
    age: Number,
    medicine: { type: String, default: "None" },
    notes: { type: String, default: "None" },
    tasks: [taskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tenant", tenantSchema);
