const admin = require("firebase-admin");
const serviceAccount = require("./rayasim-dev-firebase-adminsdk-y9lht-bb44b1d52c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;

// const messaging = admin.messaging();

// module.exports = { messaging };
