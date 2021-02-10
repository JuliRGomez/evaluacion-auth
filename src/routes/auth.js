import express from "express";
import {login, signIn} from "../controllers/auth";
import {validateJWT} from "../middlewares/jwt"
const router = express.Router();

router.post("/login", login);
router.post("/signin", signIn);
router.get("/users",validateJWT);

export default router;