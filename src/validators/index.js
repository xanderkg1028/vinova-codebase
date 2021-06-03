import { blogSchema } from "./schemas";

const validInputBlog = newBlog => {
  const { error } = blogSchema.validate(newBlog);
  if (error) throw new Error(error);
};

export default {
  validInputBlog
};
