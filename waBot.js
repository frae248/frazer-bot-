const startBot = require("../bots/waBot");

let sessions = {};

function createSession(userId) {
  const id = Date.now().toString();

  sessions[id] = {
    id,
    userId,
    status: "starting",
    code: null
  };

  startBot(id, (update) => {
    if (update.type === "code") {
      sessions[id].code = update.code;
      sessions[id].status = "waiting";
    }

    if (update.type === "connected") {
      sessions[id].status = "connected";
    }

    if (update.type === "closed") {
      sessions[id].status = "closed";
    }
  });

  return sessions[id];
}

function getSession(id) {
  return sessions[id] || { error: "not found" };
}

module.exports = { createSession, getSession };