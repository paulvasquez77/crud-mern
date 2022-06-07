import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use('/blogs', routes)

try {
    db.authenticate()
    console.log("Conexión exitosa a la base de datos");
} catch (error) {
    console.log(`Error en la conexión: ${error}`);
}

app.get('/', (req, res) => {
    res.send("Hola mundo")
})

const port = 8000;

app.listen(port, () => {
    console.log("el servidor esta actualmente corriendo en http://localhost:8000/")
})