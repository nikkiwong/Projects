import express from "express"
import { login, logout, register } from "../controllers/authController.js";
import { addToWatchlist } from "../controllers/watchlistController.js";

const router = express.Router();

router.post("/", addToWatchlist); 

// router.post("/login", login);

// router.post("/logout", logout);

export default router;