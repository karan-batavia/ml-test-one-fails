function sendProfile(email, dateOfBirth, gender) {
  fetch("https://api.mixpanel.com/engage", { method: "POST", body: JSON.stringify({ email, dateOfBirth, gender }) });
}
module.exports = { sendProfile };
