import { Router } from "express";
import { registerUser, loginUser } from "./auth.controller.js";

const api = Router();

/**
 * 📌 Rutas de autenticación
 */
api.post("/register", registerUser); // Registro de usuario (CLIENT_ROLE por defecto)
api.post("/login", loginUser); // Inicio de sesión y generación de token
api.get("/test", validateJWT, (req, res) => {
  res.json({ message: "Token válido" });
});

export default api;
