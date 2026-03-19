const jwt = require('jsonwebtoken');

const verifyTokenJwt = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    console.log(token);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    request.user = payload;
    next();
  } catch (error) {
    response.status(403).json({
      message: "Vous n'avez pas le droit d'être sur cette route protégée",
      error: true,
    });
  }
};

module.exports = verifyTokenJwt;