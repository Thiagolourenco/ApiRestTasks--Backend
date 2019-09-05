const jwt = require("jsonwebtoken");
const AuthConfig = require("../../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    return res.status(401).json({ error: "Token is provided" });
  }

  const [, token] = authHeaders.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, AuthConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Algo deu errado" });
  }
};
