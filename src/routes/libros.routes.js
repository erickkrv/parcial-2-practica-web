import { Router } from "express";
import * as librosController from "../controllers/libros.controller.js";
import validate from "../middleware/validate.js";
import libroSchema from "../schemas/libro.schema.js";

const router = Router();

router.get("/", librosController.listarLibros);
router.get("/:id", librosController.obtenerLibros);
router.post("/", validate(libroSchema), librosController.crearLibro);
router.delete("/:id", librosController.eliminarLibro);

export default router;
