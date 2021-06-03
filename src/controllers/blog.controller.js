import BlogModel from "../models/blog.model";
import { validInputBlog } from "../validators";

const getList = async (req, res, next) => {
  try {
    res.json({
      message: "This is my blog"
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res) => {
  validInputBlog(req.body);

  const { title } = req.body;

  await BlogModel.create({
    title
  });

  res.json({
    msg: "Created successfully"
  });
};

export default {
  getList,
  create
};
