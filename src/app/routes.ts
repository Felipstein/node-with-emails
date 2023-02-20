import { Router } from "express";

const route = Router();

route.post('/send-email', (req, res) => {
  res.json({ ok: true });
});

export { route };