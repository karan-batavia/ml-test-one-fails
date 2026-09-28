const mixpanel = require("mixpanel");
const client = mixpanel.init("token");

function sendProfile(email, dateOfBirth) {
  client.people.set(email, { "$email": email, dateOfBirth: dateOfBirth });
  fetch("https://api.mixpanel.com/engage", { method: "POST", body: JSON.stringify({ email, dateOfBirth }) });
}

module.exports = { sendProfile };
