import type { FastifyReply, FastifyRequest } from "fastify";
import admin from "firebase-admin";

declare module "fastify" {
	interface FastifyRequest {
		userId?: string;
	}
}

export const authMiddlewares = async (
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<void> => {
	if (request.method === "OPTIONS") {
		reply.send();
		return;
	}
	const authHeader = request.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		reply.code(401).send({ error: "Token de autorização não fornecido" });
		return;
	}

	const token = authHeader.replace("Bearer", "").trim();

	try {
		const decodedToken = await admin.auth().verifyIdToken(token);
		console.log(decodedToken);

		request.userId = decodedToken.uid;
	} catch (err) {
		request.log.error("Erro ao verificar token", err);
		return reply.code(401).send({ error: "Token invalido ou expirado" });
	}
};
