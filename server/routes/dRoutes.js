import express from "express";
import * as dotenv from "dotenv";

import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from OpenAI");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
    });

});

export default router;
