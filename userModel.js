const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema with some validations
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.trim === "") {
          throw new Error("Name must contain at least one letter");
        }
      },
    },
    age: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Age must be a postive number");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;

// Please comment out all your code when you are finished.
