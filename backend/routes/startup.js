import express from "express";
import { startup, getStartup } from "../controllers/startupInfo.js";

const router = express.Router()

// router.post('/', )
router.post('/', startup)
router.get('/:id', getStartup)

export default router