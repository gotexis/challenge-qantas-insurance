import express from "express";

import application from "./application/index";
import creditCards from "./creditCards/index";

const router = express.Router();

router.use("/v1/creditCards", creditCards);
router.use("/v1/application", application);

export default router;
