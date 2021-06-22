import { Router } from "express";
import blogRouter from "./blog.router";
const router = Router();

/**
 * @swagger
 * /blogs:
 *   get:
 *     description: Get all Employee
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.use("/blogs", blogRouter);

export default router;
