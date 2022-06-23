import express from "express";
import creditCards from "../../data/creditCards/creditCards";

const router = express.Router();

const LATENCY: number = 1000;

router.get("/all", (req, res) => {
  setTimeout(() => res.send(creditCards), LATENCY);
});

export default router;
