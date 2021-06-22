import BlogModel from "../models/blog.model";
import { validInputBlog } from "../validators";

const list = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res) => {
  try {
    const input = await validInputBlog(req.body);

    const blog = await BlogModel.create({
      ...input
    });

    res.json(blog);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  list,
  create
};
