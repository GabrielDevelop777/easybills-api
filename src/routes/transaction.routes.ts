import { type FastifyInstance, fastify } from "fastify";
import zodToJsonSchema from "zod-to-json-schema";
import createTransaction from "../controllers/transaction/createTransaction.controller";
import { deleteTransaction } from "../controllers/transaction/deleteTransaction.controller";
import { getHistoricalTransactions } from "../controllers/transaction/getHistoricalTransactions.controller";
import { getTransactions } from "../controllers/transaction/getTransactions.controller";
import { getTransactionsSummary } from "../controllers/transaction/getTransactionsSummary.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";
import {
	createTransactionSchema,
	deleteTransactionSchema,
	getHistoricalTransactionsSchema,
	getTransactionsSchema,
	getTransactionsSummarySchema,
} from "../schemas/transaction.schema";

const transactionRoutes = async (fastify: FastifyInstance) => {
	fastify.addHook("preHandler", authMiddlewares);
	fastify.route({
		method: "POST",
		url: "/",
		schema: {
			body: {
				type: "object",
				properties: (zodToJsonSchema(createTransactionSchema) as any)
					.properties,
			},
		},
		handler: createTransaction,
	});

	// Buscar com Filtros
	fastify.route({
		method: "GET",
		url: "/",
		schema: {
			querystring: {
				type: "object",
				properties: (zodToJsonSchema(getTransactionsSchema) as any).properties,
			},
		},
		handler: getTransactions,
	});

	//Buscar o Resumo
	fastify.route({
		method: "GET",
		url: "/summary",
		schema: {
			querystring: {
				type: "object",
				properties: (zodToJsonSchema(getTransactionsSummarySchema) as any)
					.properties,
			},
		},
		handler: getTransactionsSummary,
	});

	//Historico de Transações
	fastify.route({
		method: "GET",
		url: "/historical",
		schema: {
			querystring: {
				type: "object",
				properties: (zodToJsonSchema(getHistoricalTransactionsSchema) as any)
					.properties,
			},
		},
		handler: getHistoricalTransactions,
	});

	//Deletar transação
	fastify.route({
		method: "DELETE",
		url: "/:id",
		schema: {
			params: {
				type: "object",
				properties: (zodToJsonSchema(deleteTransactionSchema) as any)
					.properties,
			},
		},
		handler: deleteTransaction,
	});
};

export default transactionRoutes;
