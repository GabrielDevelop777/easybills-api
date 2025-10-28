import { TransactionType } from "@prisma/client";
import { ObjectId } from "mongodb";
import { z } from "zod";

const isValidObjectId = (id: string): boolean => ObjectId.isValid(id);

export const createTransactionSchema = z.object({
	description: z.string().min(1, "Descrição obrigatória"),
	amount: z.number().positive("Valor deve ser positivo"),
	date: z.coerce.date({
		errorMap: () => ({ message: "Data inválida" }),
	}),
	categoryId: z.string().refine(isValidObjectId, {
		message: "Categoria inválida.",
	}),
	type: z.enum([TransactionType.expense, TransactionType.income], {
		errorMap: () => ({ message: "Data inválida" }),
	}),
});

export const getTransactionsSchema = z.object({
	month: z.string().optional(),
	year: z.string().optional(),
	type: z
		.enum([TransactionType.expense, TransactionType.income], {
			errorMap: () => ({ message: "Tipo inválido" }),
		})
		.optional(),
	categoryId: z
		.string()
		.refine(isValidObjectId, {
			message: "Categoria inválida.",
		})
		.optional(),
});

export const getTransactionsSummarySchema = z.object({
	month: z.string({ message: "O mês é obrigatorio" }),
	year: z.string({ message: "O ano é obrigatorio" }),
});

export const getHistoricalTransactionsSchema = z.object({
	month: z.coerce.number().min(1).max(12),
	year: z.coerce.number().min(2000).max(2100),
	months: z.coerce.number().min(1).max(12).optional(),
});

export const deleteTransactionSchema = z.object({
	id: z.string().refine(isValidObjectId, {
		message: "ID inválida.",
	}),
});

export type GetTransactionsQuery = z.infer<typeof getTransactionsSchema>;
export type GetTransactionsSummaryQuery = z.infer<
	typeof getTransactionsSummarySchema
>;
export type DeleteTransactionParams = z.infer<typeof deleteTransactionSchema>;
export type GetHistoricalTransactionsQuery = z.infer<
	typeof getHistoricalTransactionsSchema
>;
