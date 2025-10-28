import type { FastifyInstance } from "fastify";
import zodToJsonSchema from "zod-to-json-schema";
import { getTransactionsSchema } from "../schemas/transaction.schema";
import categoriesRoutes from "./category.routes";
import transactionRoutes from "./transaction.routes";

async function routes(fastify: FastifyInstance): Promise<void> {
	fastify.get("/health", async () => {
		return {
			status: "ok",
			message: "DevBills rodando normalmente",
		};
	});
	console.log(JSON.stringify(zodToJsonSchema(getTransactionsSchema), null, 2));

	fastify.register(categoriesRoutes, { prefix: "/categories" });
	fastify.register(transactionRoutes, { prefix: "/transactions" });
}

export default routes;
