import app from "./app";
import { env } from "./config/env";
import initializeAppFirebaseAdmin from "./config/firebase";
import { prismaConnect } from "./config/prisma";
import { initializeGlobalCategories } from "./services/globalCategories.service";

const PORT = env.PORT || 3001;

initializeAppFirebaseAdmin();

const startServer = async () => {
	try {
		await prismaConnect();

		await initializeGlobalCategories();

		await app
			.listen({ port: PORT, host: "0.0.0.0" })
			.then(() => console.log(`Servidor Rodando na porta ${PORT}`));
	} catch (err) {
		console.error(err);
	}
};

startServer();
