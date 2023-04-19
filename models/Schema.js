const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/SampleDB");     // Check connection url
};
connect()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const empSchema = new mongoose.Schema(
  {
    empid: {
      type: Number,
      unique: true,
      required: [true, "Required field"],
    },
    name: String,

    salary: {
      type: Number,
      default: 10000,
      validate: (value) => {
        if (value < 50000) {
          ("enter a value greater than 50000");
        }
      },
    },
    designation: String,
  },
  // {
  //   timestamps: {
  //     createdAt: true,
  //     updatedAt: true,
  //   },
  // }
);

const employee = mongoose.model("employees", empSchema);
module.exports = employee;
