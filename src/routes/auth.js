import express from "express";
import {login, signIn,validate,getUsers} from "../controllers/auth";
import {validateJWT} from "../middlewares/jwt"
const router = express.Router();

router.post("/login", login);
router.post("/signin", signIn);
router.get("/users",getUsers);
router.get("/users/:id",validate);

export default router;