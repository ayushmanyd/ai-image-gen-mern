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


export default router;
