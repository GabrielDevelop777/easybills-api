import type { FastifyInstance } from "fastify";
import { getCategories } from "../controllers/category.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const categoriesRoutes = async (fastify: FastifyInstance): Promise<void> => {
	fastify.addHook("preHandler", authMiddlewares);

	fastify.get("/", getCategories);
};

export default categoriesRoutes;
