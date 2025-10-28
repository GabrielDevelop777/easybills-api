import cors from "@fastify/cors";
import type { FastifyInstance } from "fastify";
import Fastify from "fastify";
import { env } from "./config/env";
import routes from "./routes";

const app: FastifyInstance = Fastify({
	logger: {
		level: env.NODE_ENV === "dev" ? "info" : "error",
	},
});

app.register(cors, {
	origin: "https://devbills-interface-beta.vercel.app", // <-- AQUI A MUDANÇA
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Também corrigi seu array de métodos
});

app.register(routes, { prefix: "/api" });

export default app;
