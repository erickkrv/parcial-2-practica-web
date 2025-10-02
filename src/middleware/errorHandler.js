
function errorHandler(err, req, res, next) {

    res.status(500).json({
        error: "Error interno del servidor. Inténtalo más tarde."
    });
}

export default errorHandler;
