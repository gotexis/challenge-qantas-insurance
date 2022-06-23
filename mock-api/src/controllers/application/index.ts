import express from "express";

const router = express.Router();

const LATENCY: number = 1000;

router.post("/personal-details", (req, res) => {
  const { name, applicationId } = req.body;
  if (name === "Test error") {
    res.status(500).json({
      code: "UPSTREAM_ERROR",
      message: `Sorry, we are experiencing some technical difficulties and are
        unable to process your application at this time. Please try again later.`,
    });
    return;
  }
  setTimeout(
    () =>
      res.status(200).json({
        applicationId,
        step: "FINANCIAL_DETAILS",
      }),
    LATENCY,
  );
});

router.post("/financial-details", (req, res) => {
  const { applicationId } = req.body;
  setTimeout(
    () => res.status(200).json({ applicationId, step: "REVIEW_CONFIRM" }),
    LATENCY,
  );
});

router.post("/confirm", (req, res) => {
  const { applicationId } = req.body;
  setTimeout(
    () => res.status(200).json({ applicationId, success: true }),
    LATENCY,
  );
});

export default router;
