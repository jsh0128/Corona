const basicAPI = (req, res) => {
  res.status(200).json({
    succes: true,
  });
};

const testAPI = (req, res) => {
  res.status(200).json({
    message: "test",
  });
};

const postTestAPI = (req, res) => {
  const user_message = req.body.message;
  res.status(200).json({
    message: user_message,
  });
};

module.exports = {
  basicAPI: basicAPI,
  testAPI: testAPI,
  postTestAPI: postTestAPI,
};
