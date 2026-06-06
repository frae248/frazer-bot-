const express = require("express");
const cors = require("cors");
const { createSession, getSession } = require("./sessionManager");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/session/create", async (req, res) => {
  const { userId } = req.body;

  const session = await createSession(userId);

  res.json(session);
});

app.get("/api/session/:id", (req, res) => {
  res.json(getSession(req.params.id));
});

app.listen(8000, () => console.log("Frazer SaaS API running on 8000"));