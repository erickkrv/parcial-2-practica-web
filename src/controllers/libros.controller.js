import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import libros from "../data/libros_1000.json" with { type: "json" };

// GET /api/libros
export const listarLibros = (req, res) => {
    res.json(libros);
};

// GET /api/libros/:id
export const obtenerLibros = (req, res) => {
    const { id } = req.params;

    if (!uuidValidate(id)) {
        return res.status(400).json({ error: "El ID no tiene formato UUID válido" });
    }

    const libro = libros.find(p => p.id === id);
    if (!libro) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.json(libro);
};

// POST /api/libro
export const crearLibro = (req, res) => {
    const { title, author, year } = req.body;

    const duplicado = libros.find(p => p.title === title && p.year === year);
    if (duplicado) {
        return res.status(409).json({ error: "Ya existe un libro con ese título y año" });
    }

    const nuevo = { id: uuidv4(), title, author, year };
    libros.push(nuevo);

    res.status(201).json(nuevo);
};

// DELETE /api/libros/:id
export const eliminarLibro = (req, res) => {
    const { id } = req.params;

    if (!uuidValidate(id)) {
        return res.status(400).json({ error: "El ID no tiene formato UUID válido" });
    }

    const index = libros.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Libro no encontrado." });
    }

    libros.splice(index, 1);
    res.status(200).send();
};
