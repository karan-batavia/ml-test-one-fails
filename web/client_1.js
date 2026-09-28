const axios = require("axios");

function sendUser1(email, firstName, phoneNumber) {
  console.log("user", email);
  return axios.post("https://api.mixpanel.com/track", { email, firstName, phoneNumber });
}

module.exports = { sendUser1 };
