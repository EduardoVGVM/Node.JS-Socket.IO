import { MongoClient } from "mongodb";
import "dotenv/config";

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING);

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("Alura-WebSockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado com sucesso!");
} catch (error) {
    console.log(error);
}

export { documentosColecao };