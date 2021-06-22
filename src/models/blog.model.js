var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema(
  {
    title: String
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

const model = mongoose.model("blog", schema);

export default model;
