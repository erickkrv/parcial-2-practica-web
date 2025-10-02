import express from "express";
import librosRoutes from "./routes/libros.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

// Middleware global
app.use(express.json());

// Rutas
app.use("/api/libros", librosRoutes);

// Middleware de errores
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
