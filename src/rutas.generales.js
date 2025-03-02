import userRoutes from "./users/user.routes";
import auditRoutes from "./users/audit.routes";

/**
 * Función que recibe la app de Express y registra
 * todas las rutas en una sola llamada.
 */
export const rutasGenerales = (app) => {
    app.use("/api/user", userRoutes);
    app.use("/api/audit", auditRoutes);
}