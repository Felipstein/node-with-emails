import { Router } from "express";
import "dotenv/config";

import { sendEmail } from "../providers/email.provider";

const route = Router();

route.post('/send-email', (req, res) => {
  const { to, title, body } = req.body;

  if(!to || !title || !body) {
    return res.status(400).json('"to", "title" and "body" is required.');
  }

  sendEmail(to, title, body);
  
  res.sendStatus(201);
});

export { route };