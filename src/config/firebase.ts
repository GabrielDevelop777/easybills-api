import admin from "firebase-admin";
import { env } from "./env";

const initializeAppFirebaseAdmin = (): void => {
	if (admin.apps.length > 0) return;
};

const { FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY, FIREBASE_PROJECT_ID } =
	env;

if (!FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY || !FIREBASE_PROJECT_ID) {
	throw new Error("Falha ao inicar o Firebase - Faltando as credenciais");
}

try {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: FIREBASE_PROJECT_ID,
			clientEmail: FIREBASE_CLIENT_EMAIL,
			privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		}),
	});
} catch (err) {
	// Mudei o console.error para aparecer melhor no log
	console.error("❌ FALHA AO INICIAR O FIREBASE:", err);
	process.exit(1);
}

export default initializeAppFirebaseAdmin;
