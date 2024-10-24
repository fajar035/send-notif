const admin = require("../../firebaseConfig");

const sendNotification = (req, res) => {
  const token = req.headers.token;
  const messaging = admin.messaging();
  const { title, body } = req.body;

  if (title && body) {
    const message = {
      notification: {
        title: "req.body?.title",
        body: "req.body?.body",
      },
      token,
    };

    messaging
      .send(message)
      .then((result) => {
        res.status(200).json({
          result: {
            status: 200,
            message: result,
          },
        });
      })
      .catch((error) => {
        console.log("🚀 ~ sendNotification ~ error:", error);
        res.status(500).json({
          result: {
            status: 500,
            message: error,
          },
        });
      });
  }
};

module.exports = {
  sendNotification,
};
